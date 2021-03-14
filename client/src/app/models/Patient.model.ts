export class PatientModel {
    Timestamp?: Date;
    Personal_info?: {
        Name?: string,
        Age?: string,
        Email?: string,
        Phone?: string
    };
    Medical_Condition?: {
        Blood_Pressure?: {
            High_BP?: string,
            Low_BP?: string
        },
        Diabetics?: boolean,
        Heart_Disease?: boolean
    };
    Health_Status?: {
        BMI?: string,
        BP?: string,
        Height?: string,
        Pulse_Rate?: string,
        Weight?: string
    }
}