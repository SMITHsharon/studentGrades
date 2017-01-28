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
	if (scores[i] <= 60) {
		ltrGrades[4]++; // increment F count
	}	else if (scores[i] <= 70) { // already peeled off Fs
			ltrGrades[3]++; // increment D count
		}	else if (scores[i] <= 80) { // peeled off Ds
				ltrGrades[2]++; // increment C count
			}	else if (scores[i] <= 90) { // peeled off Cs
					ltrGrades[1]++; // increment B count
				}	else { (scores[i] > 90) // only As are left
						ltrGrades[0]++; // increment A count
					}
}

// Use console.log to output the following criteria:

// How many of each grade?
console.log("The distribution of these grades is: ");
console.log("As:", ltrGrades[0]);
console.log("Bs:", ltrGrades[1]);
console.log("Cs:", ltrGrades[2]);  
console.log("Ds:", ltrGrades[3]);  
console.log("Fs:", ltrGrades[4]);


// What is the lowest grade?
// What is the highest grade?
var minGrade = scores[0];
var maxGrade = scores[0];

for (i=1; i<scores.length; i++) {
	if (scores[i] < minGrade) {
		minGrade = scores[i]; // this is the minimum grade
	}
	if (scores[i] > maxGrade) {
		maxGrade = scores[i]; // this is the maximum grade
	}
}


console.log("The lowest grade is: ", minGrade);
console.log("The highest grade is: ", maxGrade);

// minGrade = Math.min(scores); seems that this shd work, but No




