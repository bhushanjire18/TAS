const PatientModel = {
    Timestamp: "2021-03-14 03:30:00",
    Personal_info: {
        Name: "John Doe",
        Email: "john.doe@gmail.com",
        Phone: "9876543210",
        Age: "25 years"
    },
    Medical_Condition: {
        Heart_Disease: false,
        Diabetics: true,
        Blood_Pressure: {
            High_BP: true,
            Low_BP: false
        }
    },
    Health_Status: {
        Height: "175 cms",
        Weight: "65 kg",
        Pulse_Rate: "88 bpm",
        BP: "120/160",
        BMI: 25
    }
}
module.exports = PatientModel
