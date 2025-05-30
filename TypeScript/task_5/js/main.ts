interface MajorCredits {
    credits : number;
    brand: "Majorcredits";
}

interface MinorCredits {
    credits: number;
    brand: "Minorcredits";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "Majorcredits"
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "Minorcredits"
    };
}