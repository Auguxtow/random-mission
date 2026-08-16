const button = document.getElementById("new-mission-button")
const missionTitle = document.getElementById("card-title")

const missions = [
  "Study the topic that you have been avoiding",
  "Work out for 30 minutes",
  "Read 10 pages of a book",
  "Search for a topic that you have interest",
  "Write 500 words about something you're learning",
  "Complete one full lesson of an online course",
  "Practice a skill you want to master for 30 minutes",
  "Solve 5 problems related to something you're studying",
  "Review and rewrite your notes from the last study session",
  "Code or build something for 45 minutes",
  "Watch an educational video and write a 3 sentence summary",
  "Plan and outline a project you've been putting off",
  "Teach someone (or explain out loud) something you learned recently",
  "Spend 1 hour working on a personal project without distractions"
]

function rng() {
    return Math.ceil(Math.random() * missions.length) - 1
}

let missionIndex = rng()
missionTitle.textContent = missions[missionIndex]

function getMission(lastMission) {
    let newMission = rng();
    while (lastMission === newMission) {
        newMission = rng();
    }
    return newMission;
}

function changeMission() {
    const generatedMission = getMission(missionIndex)
    missionTitle.textContent = missions[generatedMission]
    missionIndex = generatedMission
    console.log(`changed to ${missionTitle.textContent} of index ${missionIndex}`)
}

button.addEventListener("click", changeMission)