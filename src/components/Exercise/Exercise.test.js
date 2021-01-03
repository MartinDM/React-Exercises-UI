import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise from './Exercise';

describe('Exercise', () => {

  test('Exercise component displays the exercise details', () => {

    // Arrange / Act
    const exerciseData = {
      "id": "5c0f976a29e7864758fd3dd3", "name": "Tricep Pushdown", "transcript": "<ol><li style=\"text-align: left;\">Standing upright, grip a straight bar attached to a cable at shoulder width with your palms facing down. Retract your shoulder blades and tuck your elbows in by your side. Lightly push down so the weight releases from the stack. <b>First Position</b>.</li><li style=\"text-align: left;\">Contract your triceps and push the bar down until your arms are fully extended. Your upper arm should stay in a fixed position throughout. <b>Second Position</b>.</li><li style=\"text-align: left;\">Briefly hold and contract Second Position before slowly guiding the bar back up into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>", "female": { "image": "https://cdni.gs.lightning-e.com/media/5c0e6814ee0147fd16ef61d2-femalestraightbarpushdownthumbnail.jpg" }, "male": { "image": "https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-maleoverhandpushdownthumbnail.jpg" }, "bodyAreas": ["Arms", "Triceps"]
    };
    const { container } = render(<Exercise exercise={exerciseData} />);

    // Assert
    expect(container.firstChild).toHaveClass('exercise');
    expect(screen.getByText('Muscle groups:')).toBeTruthy();
    expect(screen.getByText('Tricep Pushdown')).toBeTruthy();

  });

});