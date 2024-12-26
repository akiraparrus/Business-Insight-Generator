const insights = {
    healthcare: {
        challenges: [
            { id: 0, text: 'Reducing patient data management errors', solution: 'Implementing an integrated Electronic Health Record (EHR) system', outcome: 'Improving patient care accuracy and reducing data entry errors by 15%' },
            { id: 1, text: 'Improving patient wait times', solution: 'Streamlining appointment scheduling processes', outcome: 'Decreasing average patient wait times by 20%' },
            { id: 2, text: 'Enhancing telemedicine services', solution: 'Investing in high-quality video conferencing tools', outcome: 'Increasing patient satisfaction with remote consultations by 25%' }
        ]
    },
    banking: {
        challenges: [
            { id: 0, text: 'Reducing fraudulent transactions', solution: 'Implementing advanced fraud detection algorithms', outcome: 'Reducing fraudulent activities by 30%' },
            { id: 1, text: 'Improving customer onboarding processes', solution: 'Simplifying KYC procedures with automated tools', outcome: 'Cutting customer onboarding time in half' },
            { id: 2, text: 'Enhancing online banking security', solution: 'Enforcing multi-factor authentication for all transactions', outcome: 'Boosting online banking security and customer trust' }
        ]
    },
    retail: {
        challenges: [
            { id: 0, text: 'Improving inventory management', solution: 'Implementing AI-driven inventory tracking systems', outcome: 'Reducing stockouts and overstock situations by 20%' },
            { id: 1, text: 'Enhancing customer loyalty programs', solution: 'Personalizing loyalty programs with customer data analytics', outcome: 'Increasing customer retention rates by 15%' },
            { id: 2, text: 'Optimizing supply chain operations', solution: 'Adopting blockchain technology for supply chain transparency', outcome: 'Improving supply chain efficiency and reducing costs by 10%' }
        ]
    }
};

document.getElementById('generate-btn').addEventListener('click', generateInsight);
document.getElementById('industry').addEventListener('change', updateChallenges);

function updateChallenges() {
    const industry = document.getElementById('industry').value;
    const challengeSelect = document.getElementById('challenge');
    challengeSelect.innerHTML = '';

    insights[industry].challenges.forEach((challenge) => {
        const option = document.createElement('option');
        option.value = challenge.id;
        option.textContent = challenge.text;
        challengeSelect.appendChild(option);
    });
}

function generateInsight() {
    const industry = document.getElementById('industry').value;
    const challengeIndex = document.getElementById('challenge').value;

    const selectedIndustry = insights[industry];
    const selectedChallenge = selectedIndustry.challenges[challengeIndex];

    const insightMessage = `
        <p><strong>Industry:</strong> ${industry.charAt(0).toUpperCase() + industry.slice(1)}</p>
        <p><strong>Business Challenge:</strong> ${selectedChallenge.text}</p>
        <p><strong>Solution:</strong> ${selectedChallenge.solution}</p>
        <p><strong>Outcome:</strong> ${selectedChallenge.outcome}</p>
    `;

    document.getElementById('insight').innerHTML = insightMessage;
}

// Initialize the challenges dropdown based on the default selected industry
updateChallenges();