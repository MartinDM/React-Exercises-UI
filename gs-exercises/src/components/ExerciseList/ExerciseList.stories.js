import React from 'react';
import ExerciseList from './ExerciseList'

const Template = (args) => <ExerciseList {...args} />;

export const PopulatedList = Template.bind({});
PopulatedList.args = {
  exercises: [
    {  
      "id":"5c0f976a29e7864758fd3dd3",
      "name":"Tricep Pushdown",
      "transcript":"<ol><li style=\"text-align: left;\">Standing upright, grip a straight bar attached to a cable at shoulder width with your palms facing down. Retract your shoulder blades and tuck your elbows in by your side. Lightly push down so the weight releases from the stack. <b>First Position</b>.</li><li style=\"text-align: left;\">Contract your triceps and push the bar down until your arms are fully extended. Your upper arm should stay in a fixed position throughout. <b>Second Position</b>.</li><li style=\"text-align: left;\">Briefly hold and contract Second Position before slowly guiding the bar back up into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>",
      "female":{  
         "image":"https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalestraightbarpushdownthumbnail.jpg"
      },
      "male":{  
         "image":"https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-maleoverhandpushdownthumbnail.jpg"
      },
      "bodyAreas":[  
         "Arms",
         "Triceps"
      ]
   },
    {
      "id": "5c0e7f6d41403b024ad987cc",
      "name": "Barbell Bicep Curl",
      "transcript": "<ol><li style=\"text-align: left;\">Standing upright, grip the barbell at shoulder width with your hands facing forwards and elbows tucked close to your side. <b>First Position</b>.</li><li style=\"text-align: left;\">Curl the weight upwards, towards your shoulders, contracting your biceps. Try to keep your upper arm in a locked position.</li><li style=\"text-align: left;\">Continue to curl until you reach <b>Second Position</b>, where your biceps are fully contracted.</li><li style=\"text-align: left;\">Slowly lower the weight back into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>",
      "female": {
        "image": "https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalebbcurlsthumbnail.jpg"
      },
      "male": {
        "image": "https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malebbcurlthumbnail.jpg"
      },
      "bodyAreas": [
        "Arms",
        "Biceps"
      ]
    }
  ]
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  exercises: []
};

export default {
  component: ExerciseList,
  title: 'Exercise List',
};