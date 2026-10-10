/* ═══════════════════════════════════════════════════
   StudentSuccess AI — Complete Application Logic
   ═══════════════════════════════════════════════════ */

// ── Realistic Fictional Student Data (25 students) ──
const students = [
    { id: 1,  name: "Aarav Sharma",       dept: "Computer Science",       year: 3, attendance: 92, marks: { Python: 88, Java: 82, DBMS: 90, DSA: 78, "Web Development": 85, "Machine Learning": 80 }, assignments: 95, studyHours: 5,   email: "aarav.sharma@university.edu" },
    { id: 2,  name: "Priya Patel",        dept: "Computer Science",       year: 2, attendance: 88, marks: { Python: 76, Java: 80, DBMS: 72, DSA: 85, "Web Development": 78, "Machine Learning": 70 }, assignments: 88, studyHours: 4,   email: "priya.patel@university.edu" },
    { id: 3,  name: "Rohan Mehta",        dept: "Information Technology", year: 3, attendance: 65, marks: { Python: 58, Java: 52, DBMS: 60, DSA: 45, "Web Development": 55, "Machine Learning": 48 }, assignments: 55, studyHours: 1.5, email: "rohan.mehta@university.edu" },
    { id: 4,  name: "Sneha Reddy",        dept: "Electronics",            year: 4, attendance: 78, marks: { Python: 70, Java: 65, DBMS: 74, DSA: 60, "Web Development": 68, "Machine Learning": 62 }, assignments: 72, studyHours: 3,   email: "sneha.reddy@university.edu" },
    { id: 5,  name: "Arjun Nair",         dept: "Mechanical",             year: 1, attendance: 95, marks: { Python: 92, Java: 88, DBMS: 94, DSA: 90, "Web Development": 91, "Machine Learning": 87 }, assignments: 98, studyHours: 6,   email: "arjun.nair@university.edu" },
    { id: 6,  name: "Kavya Iyer",         dept: "Computer Science",       year: 4, attendance: 85, marks: { Python: 82, Java: 78, DBMS: 80, DSA: 75, "Web Development": 88, "Machine Learning": 84 }, assignments: 90, studyHours: 4.5, email: "kavya.iyer@university.edu" },
    { id: 7,  name: "Vikram Singh",       dept: "Information Technology", year: 2, attendance: 55, marks: { Python: 42, Java: 38, DBMS: 48, DSA: 35, "Web Development": 50, "Machine Learning": 40 }, assignments: 40, studyHours: 1,   email: "vikram.singh@university.edu" },
    { id: 8,  name: "Ananya Gupta",       dept: "Computer Science",       year: 3, attendance: 90, marks: { Python: 85, Java: 90, DBMS: 88, DSA: 82, "Web Development": 80, "Machine Learning": 86 }, assignments: 92, studyHours: 5,   email: "ananya.gupta@university.edu" },
    { id: 9,  name: "Rahul Verma",        dept: "Mechanical",             year: 2, attendance: 72, marks: { Python: 65, Java: 60, DBMS: 68, DSA: 55, "Web Development": 62, "Machine Learning": 58 }, assignments: 65, studyHours: 2.5, email: "rahul.verma@university.edu" },
    { id: 10, name: "Diya Kapoor",        dept: "Electronics",            year: 1, attendance: 94, marks: { Python: 90, Java: 86, DBMS: 92, DSA: 88, "Web Development": 84, "Machine Learning": 82 }, assignments: 96, studyHours: 5.5, email: "diya.kapoor@university.edu" },
    { id: 11, name: "Karthik Rao",        dept: "Information Technology", year: 4, attendance: 60, marks: { Python: 50, Java: 48, DBMS: 55, DSA: 42, "Web Development": 58, "Machine Learning": 45 }, assignments: 50, studyHours: 1.5, email: "karthik.rao@university.edu" },
    { id: 12, name: "Meera Joshi",        dept: "Computer Science",       year: 1, attendance: 87, marks: { Python: 78, Java: 74, DBMS: 80, DSA: 72, "Web Development": 76, "Machine Learning": 70 }, assignments: 85, studyHours: 3.5, email: "meera.joshi@university.edu" },
    { id: 13, name: "Aditya Kulkarni",    dept: "Mechanical",             year: 3, attendance: 80, marks: { Python: 72, Java: 68, DBMS: 75, DSA: 65, "Web Development": 70, "Machine Learning": 66 }, assignments: 78, studyHours: 3,   email: "aditya.kulkarni@university.edu" },
    { id: 14, name: "Ishita Banerjee",    dept: "Electronics",            year: 2, attendance: 91, marks: { Python: 86, Java: 84, DBMS: 82, DSA: 80, "Web Development": 90, "Machine Learning": 88 }, assignments: 94, studyHours: 5,   email: "ishita.banerjee@university.edu" },
    { id: 15, name: "Siddharth Menon",    dept: "Information Technology", year: 3, attendance: 68, marks: { Python: 55, Java: 50, DBMS: 62, DSA: 48, "Web Development": 60, "Machine Learning": 52 }, assignments: 58, studyHours: 2,   email: "siddharth.menon@university.edu" },
    { id: 16, name: "Riya Deshmukh",      dept: "Computer Science",       year: 2, attendance: 83, marks: { Python: 75, Java: 72, DBMS: 78, DSA: 70, "Web Development": 82, "Machine Learning": 74 }, assignments: 80, studyHours: 3.5, email: "riya.deshmukh@university.edu" },
    { id: 17, name: "Nikhil Tiwari",      dept: "Mechanical",             year: 4, attendance: 58, marks: { Python: 45, Java: 40, DBMS: 50, DSA: 38, "Web Development": 48, "Machine Learning": 42 }, assignments: 42, studyHours: 1,   email: "nikhil.tiwari@university.edu" },
    { id: 18, name: "Pooja Saxena",       dept: "Electronics",            year: 1, attendance: 89, marks: { Python: 80, Java: 76, DBMS: 84, DSA: 74, "Web Development": 78, "Machine Learning": 72 }, assignments: 88, studyHours: 4,   email: "pooja.saxena@university.edu" },
    { id: 19, name: "Tanmay Bhatt",       dept: "Information Technology", year: 4, attendance: 76, marks: { Python: 68, Java: 62, DBMS: 70, DSA: 58, "Web Development": 72, "Machine Learning": 64 }, assignments: 70, studyHours: 2.5, email: "tanmay.bhatt@university.edu" },
    { id: 20, name: "Shruti Mishra",      dept: "Computer Science",       year: 1, attendance: 96, marks: { Python: 94, Java: 92, DBMS: 96, DSA: 90, "Web Development": 88, "Machine Learning": 92 }, assignments: 99, studyHours: 6,   email: "shruti.mishra@university.edu" },
    { id: 21, name: "Deepak Choudhary",   dept: "Mechanical",             year: 2, attendance: 70, marks: { Python: 62, Java: 58, DBMS: 66, DSA: 52, "Web Development": 60, "Machine Learning": 56 }, assignments: 62, studyHours: 2,   email: "deepak.choudhary@university.edu" },
    { id: 22, name: "Nandini Pillai",     dept: "Electronics",            year: 3, attendance: 86, marks: { Python: 80, Java: 78, DBMS: 82, DSA: 76, "Web Development": 84, "Machine Learning": 78 }, assignments: 86, studyHours: 4,   email: "nandini.pillai@university.edu" },
    { id: 23, name: "Harsh Agarwal",      dept: "Information Technology", year: 1, attendance: 50, marks: { Python: 38, Java: 35, DBMS: 42, DSA: 30, "Web Development": 45, "Machine Learning": 36 }, assignments: 35, studyHours: 0.5, email: "harsh.agarwal@university.edu" },
    { id: 24, name: "Lavanya Krishnan",   dept: "Computer Science",       year: 4, attendance: 93, marks: { Python: 88, Java: 86, DBMS: 90, DSA: 84, "Web Development": 92, "Machine Learning": 90 }, assignments: 94, studyHours: 5.5, email: "lavanya.krishnan@university.edu" },
    { id: 25, name: "Amit Pandey",        dept: "Mechanical",             year: 3, attendance: 74, marks: { Python: 66, Java: 60, DBMS: 70, DSA: 56, "Web Development": 64, "Machine Learning": 58 }, assignments: 68, studyHours: 2.5, email: "amit.pandey@university.edu" }
];

// ── Compute derived fields for each student ──
function computeStudentFields(s) {
    const markValues = Object.values(s.marks);
    s.avgMarks = Math.round(markValues.reduce((a, b) => a + b, 0) / markValues.length);
    s.successScore = Math.round(
        s.attendance * 0.25 +
        s.avgMarks * 0.40 +
        s.assignments * 0.20 +
        Math.min(s.studyHours * 10, 100) * 0.15
    );
    if (s.successScore >= 75) s.risk = "Low";
    else if (s.successScore >= 55) s.risk = "Medium";
    else s.risk = "High";
}

students.forEach(computeStudentFields);

// ══════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.dataset.page;

        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.getElementById('page-' + page).classList.add('active');
    });
});

// ══════════════════════════════════════════
//  DASHBOARD — KPI + Charts
// ══════════════════════════════════════════
function renderDashboard() {
    // KPIs
    const total = students.length;
    const avgAtt = Math.round(students.reduce((s, st) => s + st.attendance, 0) / total);
    const avgMarks = Math.round(students.reduce((s, st) => s + st.avgMarks, 0) / total);
    const avgSuccess = Math.round(students.reduce((s, st) => s + st.successScore, 0) / total);
    const atRisk = students.filter(s => s.risk === "High").length;

    document.getElementById('kpi-total').textContent = total;
    document.getElementById('kpi-attendance').textContent = avgAtt + '%';
    document.getElementById('kpi-marks').textContent = avgMarks + '%';
    document.getElementById('kpi-success').textContent = avgSuccess + '%';
    document.getElementById('kpi-atrisk').textContent = atRisk;

    // Chart 1: Subject-wise average marks (bar chart)
    const subjects = Object.keys(students[0].marks);
    const subjectAvgs = subjects.map(subj => {
        const sum = students.reduce((s, st) => s + st.marks[subj], 0);
        return Math.round(sum / total);
    });

    new Chart(document.getElementById('chartSubjects'), {
        type: 'bar',
        data: {
            labels: subjects,
            datasets: [{
                label: 'Avg Marks (%)',
                data: subjectAvgs,
                backgroundColor: ['#6366f1', '#8b5cf6', '#a78bfa', '#c4b5fd', '#818cf8', '#4f46e5'],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true, max: 100 } }
        }
    });

    // Chart 2: Risk distribution (doughnut)
    const riskCounts = {
        Low: students.filter(s => s.risk === "Low").length,
        Medium: students.filter(s => s.risk === "Medium").length,
        High: students.filter(s => s.risk === "High").length
    };

    new Chart(document.getElementById('chartRisk'), {
        type: 'doughnut',
        data: {
            labels: ['🟢 Low Risk', '🟡 Medium Risk', '🔴 High Risk'],
            datasets: [{
                data: [riskCounts.Low, riskCounts.Medium, riskCounts.High],
                backgroundColor: ['#22c55e', '#f59e0b', '#ef4444']
            }]
        },
        options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });

    // Chart 3: Attendance trend (line — simulated 6 months)
    const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
    const trendData = months.map((_, i) => {
        const base = 75 + i * 2;
        return Math.min(Math.round(base + Math.random() * 6), 98);
    });

    new Chart(document.getElementById('chartTrend'), {
        type: 'line',
        data: {
            labels: months,
            datasets: [{
                label: 'Avg Attendance (%)',
                data: trendData,
                borderColor: '#4f46e5',
                backgroundColor: 'rgba(79, 70, 229, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#4f46e5'
            }]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: false, min: 60, max: 100 } }
        }
    });

    // Chart 4: Scatter — Study Hours vs Success Score
    const scatterData = students.map(s => ({ x: s.studyHours, y: s.successScore }));

    new Chart(document.getElementById('chartScatter'), {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Students',
                data: scatterData,
                backgroundColor: scatterData.map(d =>
                    d.y >= 75 ? '#22c55e' : d.y >= 55 ? '#f59e0b' : '#ef4444'
                ),
                pointRadius: 7
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { title: { display: true, text: 'Daily Study Hours' }, min: 0, max: 7 },
                y: { title: { display: true, text: 'Success Score (%)' }, min: 0, max: 100 }
            },
            plugins: { legend: { display: false } }
        }
    });
}

// ══════════════════════════════════════════
//  ANALYTICS — Filters + Bar Charts
// ══════════════════════════════════════════
let filteredChart = null;

function getFilteredStudents() {
    const dept = document.getElementById('filterDept').value;
    const year = document.getElementById('filterYear').value;
    const risk = document.getElementById('filterRisk').value;

    return students.filter(s => {
        if (dept !== 'all' && s.dept !== dept) return false;
        if (year !== 'all' && s.year !== Number(year)) return false;
        if (risk !== 'all' && s.risk !== risk) return false;
        return true;
    });
}

function applyFilters() {
    const filtered = getFilteredStudents();

    // Filtered bar chart
    if (filteredChart) filteredChart.destroy();

    const labels = filtered.map(s => s.name);
    const data = filtered.map(s => s.avgMarks);
    const colors = filtered.map(s =>
        s.risk === 'Low' ? '#22c55e' : s.risk === 'Medium' ? '#f59e0b' : '#ef4444'
    );

    filteredChart = new Chart(document.getElementById('chartFiltered'), {
        type: 'bar',
        data: {
            labels,
            datasets: [{
                label: 'Avg Marks (%)',
                data,
                backgroundColor: colors,
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            indexAxis: 'y',
            plugins: { legend: { display: false } },
            scales: { x: { beginAtZero: true, max: 100 } }
        }
    });

    // Analytics bars (subject breakdown for filtered set)
    const barsContainer = document.getElementById('analyticsBars');
    if (filtered.length === 0) {
        barsContainer.innerHTML = '<p style="color:#64748b;text-align:center;padding:20px;">No students match the selected filters.</p>';
        return;
    }

    const subjects = Object.keys(students[0].marks);
    let barsHTML = '<h3 style="margin-bottom:16px;">Subject Averages (Filtered)</h3>';

    subjects.forEach(subj => {
        const avg = Math.round(filtered.reduce((s, st) => s + st.marks[subj], 0) / filtered.length);
        const color = avg >= 75 ? '#22c55e' : avg >= 55 ? '#f59e0b' : '#ef4444';
        barsHTML += `
            <div class="bar-item">
                <span class="bar-label">${subj}</span>
                <div class="bar-track">
                    <div class="bar-fill" style="width:${avg}%;background:linear-gradient(90deg,${color},${color}dd)"></div>
                </div>
                <span class="bar-value">${avg}%</span>
            </div>`;
    });

    barsContainer.innerHTML = barsHTML;
}

// ══════════════════════════════════════════
//  STUDENT PROFILES
// ══════════════════════════════════════════
function renderProfiles() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const grid = document.getElementById('profilesGrid');

    const filtered = students.filter(s =>
        s.name.toLowerCase().includes(query) ||
        s.dept.toLowerCase().includes(query) ||
        s.email.toLowerCase().includes(query)
    );

    grid.innerHTML = filtered.map(s => `
        <div class="profile-card" onclick="openStudentModal(${s.id})">
            <div class="profile-name">${s.name}</div>
            <div class="profile-dept">${s.dept} — Year ${s.year}</div>
            <div class="profile-stats">
                <span>📊 ${s.avgMarks}%</span>
                <span>✅ ${s.attendance}%</span>
                <span>🎯 ${s.successScore}%</span>
            </div>
            <span class="risk-badge risk-${s.risk.toLowerCase()}">${s.risk === 'Low' ? '🟢' : s.risk === 'Medium' ? '🟡' : '🔴'} ${s.risk} Risk</span>
        </div>
    `).join('');
}

function openStudentModal(id) {
    const s = students.find(st => st.id === id);
    if (!s) return;

    const subjectRows = Object.entries(s.marks).map(([subj, mark]) => `
        <div class="modal-subject-row">
            <span>${subj}</span>
            <span style="font-weight:700;color:${mark >= 75 ? '#22c55e' : mark >= 55 ? '#f59e0b' : '#ef4444'}">${mark}%</span>
        </div>
    `).join('');

    const recs = getRecommendations(s);

    document.getElementById('modalBody').innerHTML = `
        <h2>${s.name}</h2>
        <div class="modal-dept">${s.dept} — Year ${s.year} | ${s.email}</div>

        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
            <span class="pred-badge risk-${s.risk.toLowerCase()}">${s.risk === 'Low' ? '🟢' : s.risk === 'Medium' ? '🟡' : '🔴'} ${s.risk} Risk</span>
            <span class="pred-badge" style="background:#e0e7ff;color:#3730a3;">🎯 Success: ${s.successScore}%</span>
            <span class="pred-badge" style="background:#f0fdf4;color:#166534;">✅ Attendance: ${s.attendance}%</span>
        </div>

        <div class="modal-section">
            <h4>📚 Subject-wise Marks</h4>
            ${subjectRows}
        </div>

        <div class="modal-section">
            <h4>📋 Quick Stats</h4>
            <div class="modal-subject-row"><span>Average Marks</span><span style="font-weight:700">${s.avgMarks}%</span></div>
            <div class="modal-subject-row"><span>Assignment Completion</span><span style="font-weight:700">${s.assignments}%</span></div>
            <div class="modal-subject-row"><span>Daily Study Hours</span><span style="font-weight:700">${s.studyHours} hrs</span></div>
        </div>

        <div class="modal-section">
            <h4>💡 AI Recommendations</h4>
            <ul class="modal-recs">
                ${recs.map(r => `<li>${r}</li>`).join('')}
            </ul>
        </div>
    `;

    document.getElementById('studentModal').classList.add('open');
}

function closeModal(event) {
    // If called with event (from overlay click), only close if clicked on overlay itself
    if (event && event.target && event.target.id !== 'studentModal') return;
    document.getElementById('studentModal').classList.remove('open');
}

function getRecommendations(s) {
    const recs = [];
    if (s.attendance < 75) recs.push("Improve attendance — aim for at least 80% to stay on track.");
    if (s.avgMarks < 60) recs.push("Schedule regular revision sessions and consider peer tutoring.");
    if (s.assignments < 70) recs.push("Complete all assignments on time — they contribute significantly to your grade.");
    if (s.studyHours < 2) recs.push("Increase daily study time to at least 3 hours for better retention.");
    const weakest = Object.entries(s.marks).sort((a, b) => a[1] - b[1])[0];
    recs.push(`Focus on ${weakest[0]} (currently ${weakest[1]}%) — practice extra problems and seek help.`);
    if (s.successScore >= 80) recs.push("Excellent work! Consider mentoring peers and taking on advanced projects.");
    if (s.successScore >= 60 && s.successScore < 80) recs.push("Set weekly goals and track your progress to stay motivated.");
    return recs;
}

// ══════════════════════════════════════════
//  CAREER PREDICTOR
// ══════════════════════════════════════════
const careerMap = {
    "Python":            ["Data Scientist", "Machine Learning Engineer", "Backend Developer", "AI Researcher"],
    "Java":              ["Software Engineer", "Android Developer", "Enterprise Architect", "Cloud Engineer"],
    "DBMS":              ["Database Administrator", "Data Analyst", "Business Intelligence Dev", "ETL Developer"],
    "DSA":               ["Software Engineer at FAANG", "Competitive Programmer", "Algorithm Engineer", "Systems Developer"],
    "Web Development":   ["Full-Stack Developer", "Frontend Engineer", "UX Engineer", "DevOps Engineer"],
    "Machine Learning":  ["ML Engineer", "AI Product Manager", "Research Scientist", "NLP Engineer"]
};

function predictCareer() {
    const attendance  = Number(document.getElementById('predAttendance').value);
    const marks       = Number(document.getElementById('predMarks').value);
    const assignments = Number(document.getElementById('predAssignments').value);
    const studyHours  = Number(document.getElementById('predStudyHours').value);
    const subject     = document.getElementById('predSubject').value;

    if (!attendance || !marks || !assignments || !studyHours) {
        alert("Please fill in all fields to get a prediction.");
        return;
    }

    const score = Math.round(
        attendance * 0.25 +
        marks * 0.40 +
        assignments * 0.20 +
        Math.min(studyHours * 10, 100) * 0.15
    );

    let risk, riskClass, successLabel;
    if (score >= 75)      { risk = "🟢 Low";    riskClass = "risk-low";    successLabel = "HIGH"; }
    else if (score >= 55) { risk = "🟡 Medium"; riskClass = "risk-medium"; successLabel = "MODERATE"; }
    else                  { risk = "🔴 High";   riskClass = "risk-high";   successLabel = "LOW"; }

    const careers = careerMap[subject] || ["Software Developer", "Technical Consultant"];

    const tips = [];
    if (attendance < 75) tips.push("📌 Boost attendance above 80% for better academic standing.");
    if (marks < 60) tips.push("📖 Dedicate focused study sessions to raise your marks.");
    if (studyHours < 3) tips.push("⏰ Increase daily study hours to at least 3-4 hours.");
    if (assignments < 70) tips.push("📝 Prioritize completing all assignments on time.");
    if (score >= 80) tips.push("🌟 You're on a great track — aim for internships and projects!");
    if (tips.length === 0) tips.push("📈 Keep up the good work and explore extracurricular projects.");

    document.getElementById('predictionResult').innerHTML = `
        <h3>🤖 AI Career Prediction</h3>
        <div class="pred-score-big" style="color:${score >= 75 ? '#22c55e' : score >= 55 ? '#f59e0b' : '#ef4444'}">${score}%</div>
        <div style="text-align:center;margin-bottom:16px;">
            <span class="pred-badge ${riskClass}">Risk: ${risk}</span>
            <span class="pred-badge" style="background:#e0e7ff;color:#3730a3;">Success: ${successLabel}</span>
        </div>
        <h4 style="margin-bottom:8px;">🚀 Recommended Career Paths (based on ${subject})</h4>
        <ul class="pred-careers">
            ${careers.map(c => `<li>${c}</li>`).join('')}
        </ul>
        <h4 style="margin:16px 0 8px;">💡 AI Recommendations</h4>
        <ul class="pred-careers" style="list-style:none;">
            ${tips.map(t => `<li style="border:none;">${t}</li>`).join('')}
        </ul>
    `;
}

// ══════════════════════════════════════════
//  AI CHATBOT (Demo — rule-based)
// ══════════════════════════════════════════
const chatResponses = [
    { keywords: ["hello", "hi", "hey", "greetings"],
      response: "Hello! 👋 I'm your AI Academic Assistant. How can I help you today? You can ask about study tips, career paths, improving grades, or any academic question!" },
    { keywords: ["dsa", "data structure", "algorithm"],
      response: "Great question about DSA! 🧩 Here's my advice:\n\n1. Start with arrays, linked lists, stacks & queues\n2. Practice 2-3 problems daily on LeetCode or HackerRank\n3. Learn Big-O analysis early\n4. Focus on trees and graphs for interviews\n5. Participate in coding contests weekly\n\nConsistency is key — even 45 minutes daily makes a huge difference!" },
    { keywords: ["python", "programming"],
      response: "Python is an amazing language! 🐍 Tips to excel:\n\n1. Master fundamentals: loops, functions, OOP\n2. Build projects — web scrapers, data dashboards, automation scripts\n3. Learn libraries like NumPy, Pandas, and Matplotlib\n4. Practice on Kaggle for data science\n5. Read Python docs and PEP8 guidelines\n\nPython opens doors to AI, web dev, and data science careers!" },
    { keywords: ["java", "object oriented"],
      response: "Java is excellent for enterprise development! ☕ My tips:\n\n1. Understand OOP concepts thoroughly\n2. Practice collections framework\n3. Build REST APIs with Spring Boot\n4. Learn multithreading basics\n5. Work on Android projects for mobile experience\n\nJava skills are highly valued in the industry!" },
    { keywords: ["career", "job", "placement", "interview"],
      response: "Career planning is crucial! 🎯 Here's a roadmap:\n\n1. Build a strong portfolio on GitHub\n2. Practice DSA for coding interviews\n3. Do at least 2 internships before graduating\n4. Participate in hackathons\n5. Network on LinkedIn actively\n6. Prepare for behavioral interviews too\n\nCheck the Career Predictor page for personalized recommendations!" },
    { keywords: ["attendance", "class", "absent"],
      response: "Attendance matters more than you think! 📅\n\n1. Aim for 85%+ attendance\n2. Front-row seating improves focus\n3. Take handwritten notes for better retention\n4. Attend doubt-clearing sessions\n5. Form study groups with classmates\n\nGood attendance correlates strongly with better grades!" },
    { keywords: ["marks", "grade", "score", "exam", "improve", "study"],
      response: "Here are proven strategies to improve your grades! 📚\n\n1. Create a study schedule and stick to it\n2. Use active recall and spaced repetition\n3. Solve previous year question papers\n4. Teach concepts to others — it reinforces learning\n5. Take regular breaks (Pomodoro technique)\n6. Sleep 7-8 hours — your brain consolidates memory during sleep\n\nSmall daily improvements lead to big results!" },
    { keywords: ["machine learning", "ai", "artificial intelligence", "ml"],
      response: "ML/AI is an exciting field! 🤖 Getting started:\n\n1. Master Python + math (linear algebra, probability, calculus)\n2. Start with scikit-learn, then move to TensorFlow/PyTorch\n3. Take Andrew Ng's ML course on Coursera\n4. Build projects: sentiment analysis, image classifier, recommendation system\n5. Participate in Kaggle competitions\n\nThe AI field is growing rapidly — great career choice!" },
    { keywords: ["web", "frontend", "backend", "fullstack", "html", "css", "javascript"],
      response: "Web development is versatile! 🌐 Learning path:\n\n1. Master HTML, CSS, JavaScript fundamentals\n2. Learn React or Vue.js for frontend\n3. Node.js + Express for backend\n4. Database: MongoDB or PostgreSQL\n5. Deploy projects on Vercel or Netlify\n6. Build a portfolio website!\n\nFull-stack developers are in huge demand!" },
    { keywords: ["stress", "anxiety", "mental health", "overwhelm", "tired"],
      response: "Your well-being comes first! 💚 Here's what helps:\n\n1. Break tasks into smaller, manageable pieces\n2. Exercise regularly — even 20-minute walks help\n3. Practice deep breathing or meditation\n4. Talk to friends, family, or a counselor\n5. Maintain a healthy sleep schedule\n6. Remember: it's okay to ask for help\n\nYou're doing great — take it one step at a time!" },
    { keywords: ["project", "hackathon"],
      response: "Projects and hackathons are game-changers! 🚀\n\n1. Start with small projects and scale up\n2. Use GitHub for version control and showcasing\n3. Participate in college hackathons first\n4. Team up with people who have different skills\n5. Focus on solving real problems\n\nRecruiter love project-driven candidates!" },
    { keywords: ["database", "dbms", "sql"],
      response: "DBMS knowledge is essential! 🗄️ Key areas:\n\n1. Master SQL queries — SELECT, JOIN, GROUP BY\n2. Understand normalization (1NF to BCNF)\n3. Learn ER modeling and schema design\n4. Practice on platforms like SQLZoo or Mode Analytics\n5. Explore NoSQL databases like MongoDB too\n\nEvery software system relies on databases!" },
    { keywords: ["thank", "thanks", "helpful"],
      response: "You're welcome! 😊 I'm always here to help. Feel free to ask anything else about academics, careers, or study strategies. Good luck with your studies! 🎓" }
];

function getBotResponse(input) {
    const lower = input.toLowerCase();
    for (const entry of chatResponses) {
        if (entry.keywords.some(kw => lower.includes(kw))) {
            return entry.response;
        }
    }
    return "That's an interesting question! 🤔 While I specialize in academic guidance, here are some general tips:\n\n1. Stay curious and keep learning\n2. Practice consistently\n3. Don't hesitate to ask professors for help\n4. Use online resources like Coursera, YouTube, and documentation\n\nTry asking me about specific subjects like DSA, Python, career planning, or study tips!";
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    const messages = document.getElementById('chatMessages');

    // User message
    messages.innerHTML += `
        <div class="chat-msg user">
            <div class="chat-avatar">👤</div>
            <div class="chat-bubble">${escapeHtml(text)}</div>
        </div>`;

    input.value = '';

    // Simulate typing delay
    setTimeout(() => {
        const response = getBotResponse(text);
        messages.innerHTML += `
            <div class="chat-msg bot">
                <div class="chat-avatar">🤖</div>
                <div class="chat-bubble">${response.replace(/\n/g, '<br>')}</div>
            </div>`;
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    messages.scrollTop = messages.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ══════════════════════════════════════════
//  CSV EXPORT
// ══════════════════════════════════════════
function exportCSV() {
    const subjects = Object.keys(students[0].marks);
    const headers = ['ID', 'Name', 'Department', 'Year', 'Attendance%', ...subjects, 'AvgMarks%', 'Assignments%', 'StudyHours', 'SuccessScore%', 'RiskLevel'];

    const rows = students.map(s => [
        s.id,
        `"${s.name}"`,
        `"${s.dept}"`,
        s.year,
        s.attendance,
        ...subjects.map(subj => s.marks[subj]),
        s.avgMarks,
        s.assignments,
        s.studyHours,
        s.successScore,
        s.risk
    ]);

    let csv = headers.join(',') + '\n';
    rows.forEach(r => csv += r.join(',') + '\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'StudentSuccessAI_Report.csv';
    a.click();
    URL.revokeObjectURL(url);
}

// ══════════════════════════════════════════
//  INITIALIZATION
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    applyFilters();
    renderProfiles();
});