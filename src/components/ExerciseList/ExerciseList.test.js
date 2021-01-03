import React from 'react';
import { render, screen } from '@testing-library/react';
import ExerciseList from './ExerciseList';

describe('ExerciseList', () => {

  test('Exercise List displays the exercises', () => {

    // Arrange / Act
    const exerciseData = [
      { "id": "5c0f976a29e7864758fd3dd3", "name": "Tricep Pushdown", "transcript": "<ol><li style=\"text-align: left;\">Standing upright, grip a straight bar attached to a cable at shoulder width with your palms facing down. Retract your shoulder blades and tuck your elbows in by your side. Lightly push down so the weight releases from the stack. <b>First Position</b>.</li><li style=\"text-align: left;\">Contract your triceps and push the bar down until your arms are fully extended. Your upper arm should stay in a fixed position throughout. <b>Second Position</b>.</li><li style=\"text-align: left;\">Briefly hold and contract Second Position before slowly guiding the bar back up into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>", "female": { "image": "https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalestraightbarpushdownthumbnail.jpg" }, "male": { "image": "https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-maleoverhandpushdownthumbnail.jpg" }, "bodyAreas": ["Arms", "Triceps"] },
      { "id": "5c10de5792437a5c67e74ba2", "name": "Pull Up", "transcript": "<ol><li style=\"text-align: left;\">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style=\"text-align: left;\">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style=\"text-align: left;\">Slow and controlled, fall back into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>", "female": { "image": "https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg" }, "male": { "image": "https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg" }, "bodyAreas": ["Back", "Biceps"] },
      { "id": "5c0e7f6d41403b024ad987cc", "name": "Barbell Bicep Curl", "transcript": "<ol><li style=\"text-align: left;\">Standing upright, grip the barbell at shoulder width with your hands facing forwards and elbows tucked close to your side. <b>First Position</b>.</li><li style=\"text-align: left;\">Curl the weight upwards, towards your shoulders, contracting your biceps. Try to keep your upper arm in a locked position.</li><li style=\"text-align: left;\">Continue to curl until you reach <b>Second Position</b>, where your biceps are fully contracted.</li><li style=\"text-align: left;\">Slowly lower the weight back into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>", "female": { "image": "https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalebbcurlsthumbnail.jpg" }, "male": { "image": "https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malebbcurlthumbnail.jpg" }, "bodyAreas": ["Arms", "Biceps"] }
    ];
    const { container } = render(<ExerciseList exercises={exerciseData} />)
    const emptyList = container.querySelector('exercise-list--empty')

    // Assert
    expect(container.firstChild).toHaveClass('exercise-list');
    expect(container.firstChild.firstChild).toHaveClass('exercise');
    expect(emptyList).toBeNull();

  });

  test('List displays empty list element if no exercises available', () => {
    
    // Arrange / Act
    const exerciseData = [];
    const { container } = render(<ExerciseList exercises={exerciseData} />);
    const emptyList = container.querySelectorAll('exercise-list--empty');
    const exercise = container.querySelector('exercise')

    // Assert
    expect(emptyList).toBeTruthy();
    expect(exercise).not.toBeInTheDocument();
  });

});