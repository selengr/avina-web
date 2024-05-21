import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Add } from '@mui/icons-material';
import { Typography } from '@mui/material';

export default function Stroops(props) {
  const navigate = useNavigate();
  let isRendering = false;
  let simpleCounter = 0;
  const [renderItem, setRenderItem] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackType, setFeedbackType] = useState(2);
  const [counter, setCounter] = useState(0);
  let startTime = 0,
    stopTime = 0;

  useEffect(() => {
    const keydown = window.addEventListener('keydown', handleQuestionRresponse);
    return () => keydown;
  }, []);

  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  } //await timeout(1000)

  //todo check timer when feedback is available
  const keyHandler = async (selected, option) => {
    if (isRendering === false && simpleCounter < props.data.list.length - 1) {
      if (props.data.list[simpleCounter].type === 'question' && props.data.q_groups_feedback.get(props.data.list[simpleCounter].g_type).feedback) {
        if (props.data.list[simpleCounter].options[selected].weight) {
          setFeedbackType(1);
        } else {
          setFeedbackType(0);
        }
        setShowFeedback(true);
        setRenderItem(true);
        isRendering = true;
        await timeout(props.data.answerToFixationCrossTime);
      }
      simpleCounter++;
      setCounter((preveCounter) => preveCounter + 1);
      setRenderItem(false);
      setShowFeedback(false);
      isRendering = true;
      if (props.data.list[simpleCounter - 1].type === 'question') {
        stopTime = new Date();
        props.data.list[simpleCounter - 1].selectedOption = option.id;
        props.data.list[simpleCounter - 1].time = stopTime - startTime;
        // console.log('starttttt', startTime);
        // console.log('enddddddd', stopTime);
        setTimeout(() => {
          setRenderItem(true);
          isRendering = false;
          startTime = new Date();
        }, props.data.fixationCrossTime);
      } else {
        stopTime = 0;
        startTime = new Date();
        setRenderItem(true);
        isRendering = false;
      }
    } else if (simpleCounter === props.data.list.length - 1) {
      let finalData;
      let options = {};
      props.data.list.forEach((item) => {
        if (item.type === 'question') {
          options = { ...options, ...{ [item.selectedOption]: { responseTime: item.time } } };
        }
      });
      finalData = (({ test_id, questionnaire_id }) => ({
        test_id,
        questionnaire_id,
      }))(props.data);
      finalData = { ...finalData, options };
      // console.log(finalData);
      localStorage.setItem('taskData', JSON.stringify(finalData));
      // props.fullScreen()
      navigate('/postTask');
      //do what you want to do at the end
    }
  };

  const handleQuestionRresponse = (e) => {
    const key = e.key;
    if (props.data.list[simpleCounter].type === 'question') {
      switch (key) {
        case '1':
          keyHandler(0, props.data.list[simpleCounter].options[0]).then((r) => r);
          break;
        case '2':
          keyHandler(1, props.data.list[simpleCounter].options[2]).then((r) => r);
          break;
        case '3':
          keyHandler(2, props.data.list[simpleCounter].options[1]).then((r) => r);
          break;
        default:
          break;
      }
    } else {
      keyHandler().then((r) => r);
    }
  };

  const descriptionCard = (description) => {
    return (
      <div
        style={{
          position: 'fixed' /* or absolute */,
          top: '25%',
          fontSize: '32px',
          textAlign: 'center',
        }}>
        <h1>
          {description.text}
          {/*{counter}*/}
        </h1>
      </div>
    );
  };
  const questionCard = (question) => {
    return (
      <div>
        <img
          src={question.image}
          alt='question item'
          style={{
            width: '8cm',
            height: '8cm',
            position: 'fixed' /* or absolute */,
            top: '50%',
            left: '50%',
            marginTop: '-4cm', // 1/2 width
            marginLeft: '-4cm', // 1/2 height
          }}
        />
        {/*<h1>{counter}</h1>*/}
        {/*<p>{question.options[0].value}</p>*/}
        {/*<p>{question.options[1].value}</p>*/}
        {/*<p>{question.options[2].value}</p>*/}
        {/*<br />*/}
        <div
          style={{
            position: 'fixed' /* or absolute */,
            top: '75%',
            // textAlign: 'center'
          }}>
          {showFeedback && feedbackType === 0 ? (
            <Typography align={'center'} variant={'h6'}>
              {props.data.q_groups_feedback.get(question.g_type).wrong}
            </Typography>
          ) : null}
          {showFeedback && feedbackType === 1 ? (
            <Typography align={'center'} variant={'h6'}>
              {props.data.q_groups_feedback.get(question.g_type).correct}
            </Typography>
          ) : null}
          {showFeedback && feedbackType === 2 ? (
            <Typography align={'center'} variant={'h6'}>
              {props.data.q_groups_feedback.get(question.g_type).timeUp}
            </Typography>
          ) : null}
        </div>
      </div>
    );
  };

  const rendereComponent = (item) => {
    if (renderItem) {
      if (item.type === 'question') {
        return questionCard(item);
      } else {
        return descriptionCard(item);
      }
    } else {
      return (
        <div>
          <Add
            color='secondary'
            style={{
              fontSize: '200px',
              position: 'fixed' /* or absolute */,
              top: '50%',
              left: '50%',
              marginTop: '-100px',
              marginLeft: '-100px',
              color: 'dimgray',
              opacity: '0.4',
            }}
          />
        </div>
      );
    }
  };

  return rendereComponent(props.data.list[counter]);
}

Stroops.prototype = {
  data: PropTypes.object,
};
