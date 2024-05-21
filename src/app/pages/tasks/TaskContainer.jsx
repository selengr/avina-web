import Stroops from './Stroops';
import { useFullscreen } from 'ahooks';
import { useEffect, useRef } from 'react';

export default function TaskContainer() {
  const ref = useRef();
  const [isFullscreen, { setFull, exitFull, toggleFull }] = useFullscreen(ref);
  let usableData = null;
  const q_groups_feedback = new Map();
  const list = [];
  const data = JSON.parse(localStorage.stroop);
  useEffect(() => {
    try {
      if (!isFullscreen) {
        setFull();
      }
    } catch (e) {}
  }, []);
  const shuffle = (array) => {
    let randomIndex = 0;
    let currentIndex = array.length;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  };

  const findCorrectItem = (item) => {
    let color;
    item.options.forEach((option) => {
      if (option.weight === 1) color = option.value;
    });
    return color;
  };

  const differentRandom = (arr) => {
    let color = '';
    const colors = new Map();
    let temp = [];
    const finalArray = [];
    let done = false;
    arr.forEach((item) => {
      temp = [];
      item.options.forEach((item) => {
        if (item.weight) {
          color = item.value;
        }
      });
      if (colors.get(color)) {
        temp.push(...[...colors.get(color), item]);
        colors.set(color, temp);
      } else {
        temp.push(item);
        colors.set(color, temp);
      }
    });

    for (let index = 0; index < colors.get(color).length; index++) {
      temp = [];
      Array.from(colors.keys()).forEach((element) => {
        temp.push(colors.get(element)[index]);
      });
      if (finalArray && finalArray.length > 0) {
        done = true;
        while (done) {
          temp = shuffle(temp);
          if (findCorrectItem(finalArray[finalArray.length - 1]) !== findCorrectItem(temp[0])) {
            finalArray.push(...temp);
            done = false;
          }
        }
      } else {
        finalArray.push(...shuffle(temp));
      }
    }
    return finalArray;
  };

  const initialData = () => {
    //extraction custom
    const custom = (({ blockOrder, responseState, responseType, answerToFixationCrossTime, fixationCrossTime, minResponseTime, maxResponseTime }) => ({
      blockOrder,
      responseState,
      responseType,
      answerToFixationCrossTime,
      fixationCrossTime,
      minResponseTime,
      maxResponseTime,
    }))(data.custom);

    //extracting test general data
    usableData = (({ id, name, key, description }) => ({ id, name, key, description }))(data);

    //extracting test general data
    usableData = (({ id, name, key, description }) => ({
      id,
      name,
      key,
      description,
    }))(data);
    usableData = {
      ...usableData,
      ...custom,
      ...{
        test_id: localStorage.testID,
        questionnaire_id: data.question_groups[0].questionnaire_id,
      },
    };

    //extraction custom description
    data.custom.description.forEach((item) => {
      list.push({ type: 'description', text: item });
    });

    //extraction question groups custom data
    data.question_groups.forEach((item) => {
      q_groups_feedback.set(item.custom.type, {
        feedback: item.custom.feedback,
        ...item.custom.feedbackComment,
      });
    });
    usableData = { ...usableData, q_groups_feedback };

    //extracting desc and question from question groups
    data.question_groups.forEach((item) => {
      item.custom.startingDescription.forEach((element) => {
        list.push({ type: 'description', text: element });
      });
      //shuffling and then producing usable data
      differentRandom(item.questions).forEach((element) => {
        list.push({
          g_type: item.custom.type,
          type: 'question',
          id: element.id,
          image: element.image,
          options: element.options,
          c_type: element.type,
          selectedOption: -1,
          time: 0,
        });
      });
    });
    //finishing_description remaining
    list.push({ type: 'description', text: data.custom.finishingDescription });
    usableData = { ...usableData, list };
    // console.log(usableData);
  };
  initialData();
  return (
    <div ref={ref} className={'d-flex justify-content-around align-self-center align-item-center align-content-center mh-100 d-inline-block'}>
      <Stroops data={usableData} />
    </div>
  );
}
