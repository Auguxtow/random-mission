const button = document.getElementById("new-mission-button")
const missionTitle = document.getElementById("card-title")

const missions = ["Study the topic that you have been avoiding", "Work out for 30 minutes", "Read 10 pages of a book", "Search for a topic that you have interest"]

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