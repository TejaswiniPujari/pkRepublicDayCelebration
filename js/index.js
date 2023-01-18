
const userRewards = {
    0: 'User receives 25% of total beans pot',
    1: 'User receives 20% of total beans pot',
    2: 'User receives 15% of total beans pot',
    3: 'User receives 10% of total beans pot',
    4: 'User receives 5% of total beans pot'
}
const userRewardsImg = {
    0: '../img/user-rewards/BeansPot1.png',
    1: '../img/user-rewards/BeansPot2.png',
    2: '../img/user-rewards/BeansPot3.png',
    3: '../img/user-rewards/BeansPot4.png',
    4: '../img/user-rewards/BeansPot5.png'
}

const talentRewardsImg = {
    0: '../img/talent-rewards/Rewards1.png',
    1: '../img/talent-rewards/Rewards2-3.png',
    2: '../img/talent-rewards/Rewards2-3.png',
    3: '../img/talent-rewards/Rewards4.png',
}
const talentRewards = {
    0: '15 days PK STAR BADGE + Audio theme of PK combat + PK Superstar Profile Frame ',
    1: '10 days Audio theme of PK combat + PK Superstar Profile Frame',
    2: '07 days Audio theme of PK combat + PK Superstar Profile Frame',
    3: '5 days Audio theme of PK combat',
}
let mode = 'user';
let slidNumber = 0;

function setReward() {
    if (mode == 'user') {
        if (slidNumber == 4 || slidNumber==-1) slidNumber = 0;
        else slidNumber = slidNumber + 1;
        document.getElementById('reward-description').innerHTML = userRewards[slidNumber];
        document.getElementById('reward-img').src = userRewardsImg[slidNumber];
    }
    else {
        if (slidNumber == 3 || slidNumber==-1) slidNumber = 0;
        else slidNumber = slidNumber + 1;
        document.getElementById('reward-description').innerHTML = talentRewards[slidNumber];
        document.getElementById('reward-img').src = talentRewardsImg[slidNumber];
    }
}
setInterval(setReward, 2000)

document.getElementById('modal').style.display = 'none';
document.getElementById('singing').style.display = 'none';
document.getElementById('fashion').style.display = 'none';

function showGuidline() {
    document.getElementById('modal').style.display = 'block';
    document.getElementById('main').classList.add('main');
}
function hideGuidline() {
    document.getElementById('modal').style.display = 'none';
    document.getElementById('main').classList.remove('main');
}
function setDancingSchedule() {
    document.getElementById('dancing-btn').classList.remove('grey-filter');
    document.getElementById('singing-btn').src = '../img/SingingButtonUnselect.png';
    document.getElementById('fashion-btn').src = '../img/FashionButtonUnselect.png';
    document.getElementById('dancing').style.display = 'block';
    document.getElementById('singing').style.display = 'none';
    document.getElementById('fashion').style.display = 'none';
}
function setSingingSchedule() {
    document.getElementById('dancing-btn').classList.add('grey-filter');
    document.getElementById('singing-btn').src = '../img/SingingButton.png';
    document.getElementById('fashion-btn').src = '../img/FashionButtonUnselect.png';
    document.getElementById('dancing').style.display = 'none';
    document.getElementById('singing').style.display = 'block';
    document.getElementById('fashion').style.display = 'none';
}
function setFashionSchedule() {
    document.getElementById('dancing-btn').classList.add('grey-filter');
    document.getElementById('singing-btn').src = '../img/SingingButtonUnselect.png';
    document.getElementById('fashion-btn').src = '../img/FashionButton.png';
    document.getElementById('dancing').style.display = 'none';
    document.getElementById('singing').style.display = 'none';
    document.getElementById('fashion').style.display = 'block';
}
function setUserMode() {
    mode = 'user'
    document.getElementById("user-btn").src = "../img/UserButton.png";
    document.getElementById('talent-btn').src = "../img/TalentButtonUnselect.png";
    slidNumber=-1;
    setReward();
}

function setTalentMode() {
    mode = 'talent'
    document.getElementById("user-btn").src = "../img/UserButtonUnselect.png";
    document.getElementById('talent-btn').src = "../img/TalentButton.png";
    slidNumber=-1;
    setReward();
}