var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var ltrGrades = [0, 0, 0, 0, 0]; // A, B, C, D, F counts initialized to zero
// console.log(scores, ltrGrades);

// Loop over an array of student grades (values from 50-100) 
// and tally how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

for (i=0; i<scores.length; i++) {
	switch {
		(scores[i] <= 60):
			ltrGrades[4]++; // increment F count
		( (scores[i] > 60) && (scores[i] <= 70) ):
			ltrGrades[3]++; // increment D count
		( (scores[i] > 70) && (scores[i] <= 80) ):
			ltrGrades[2]++; // increment C count
		( (scores[i] > 80) && (scores[i] <= 90) ):
			ltrGrades[1]++; // increment B count
		(scores[i] > 90):
			ltrGrades[0]++; // increment A count
		default:
    	console.log("what? There's an error...");	
	}
}

