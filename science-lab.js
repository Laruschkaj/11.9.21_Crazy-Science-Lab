/* Task 1: Compile Participant Details with Shorthand Property Names */
const participantName = 'Jane Doe';
const age = 32;
const studyField = 'Neuroscience';

const participant = { participantName, age, studyField };
console.log('Task 1 - participant:', participant);

/* Task 2: Implement a Shorthand Function for Participant Info */
const participantWithMethod = {
    ...participant,
    displayInfo() {
        console.log(`Name: ${this.participantName}, Age: ${this.age}, Study Field: ${this.studyField}`);
    }
};

console.log('\nTask 2 - Shorthand method using "this":');
participantWithMethod.displayInfo();

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
const participantWithArrow = {
    ...participant,
    displayInfo: () => {
        // Arrow functions don't bind their own `this` — so `this` here refers to the outer (global) scope.
        console.log(`Name: ${participant.participantName}, Age: ${participant.age}, Study Field: ${participant.studyField}`);
    }
};

console.log('\nTask 3 - Arrow function method:');
participantWithArrow.displayInfo();

/*
 * Observations:
 * Arrow functions do not have their own `this`, so they cannot access the object's properties via `this`.
 * Instead, we had to reference the outer scoped variable `participant` directly.
 * This is why regular functions are better for object methods where `this` refers to the object itself.
 */

/* Task 4: Using Computed Property Names */
function updateParticipantInfo(obj, propertyName, value) {
    return {
        ...obj,
        [propertyName]: value
    };
}

//Example Usage
console.log('\nTask 4 - Updating participant info:');
const updatedParticipant = updateParticipantInfo(participant, 'studyField', 'Astrophysics');
console.log(updatedParticipant);
