import React from 'react';
import Exercise from './Exercise'

const Template = (args) => <Exercise {...args} />;

export const Default = Template.bind({});

Default.args = {
  exercise: { 
    "id":"5c0e7f6d41403b024ad987cc",
    "name":"Barbell Bicep Curl",
    "transcript":"<ol><li style=\"text-align: left;\">Standing upright, grip the barbell at shoulder width with your hands facing forwards and elbows tucked close to your side. <b>First Position</b>.</li><li style=\"text-align: left;\">Curl the weight upwards, towards your shoulders, contracting your biceps. Try to keep your upper arm in a locked position.</li><li style=\"text-align: left;\">Continue to curl until you reach <b>Second Position</b>, where your biceps are fully contracted.</li><li style=\"text-align: left;\">Slowly lower the weight back into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>",
    "female":{  
      "image":"https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalebbcurlsthumbnail.jpg"
    },
    "male":{  
      "image":"https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malebbcurlthumbnail.jpg"
    },
    "bodyAreas":[  
      "Arms",
      "Biceps"
    ]
  }
};

export default {
  component: Exercise,
  title: 'Exercise',
};