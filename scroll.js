// Side navi bar
const side_nav = document.querySelector('.side_nav')
// The li label in side navigation bar
const lis = document.querySelectorAll('.side_nav li')

// Main blocks (profolio; music; experience; github)
const main = document.querySelectorAll('.main div')
// define each block and their position
const profolio = document.querySelector('.profolio')
const pro_scroll = profolio.offsetTop
const music = document.querySelector('.music')
const mus_scroll = music.offsetTop
const experience = document.querySelector('.experience')
const exp_scroll = experience.offsetTop
const github = document.querySelector('.github')
const git_scroll = github.offsetTop

// based on scroll position, add classname 'active' to specific li in side_navi bar
window.addEventListener('scroll', function(){
    let n = document.documentElement.scrollTop

    // when scroll out of "header", navigation appears
    side_nav.style.opacity = n >= pro_scroll ? 1 : 0

    // determining the position of web page scroll
    // might be improved later
    if(mus_scroll>n && n>=pro_scroll){
        document.querySelector('.active').classList.remove('active')
        lis[1].classList.add('active')
    }
    else if(exp_scroll>n && n>=mus_scroll){
        document.querySelector('.active').classList.remove('active')
        lis[2].classList.add('active')
    }
    else if(git_scroll>n && n>=exp_scroll){
        document.querySelector('.active').classList.remove('active')
        lis[3].classList.add('active')
    }
    else if(n>=git_scroll){
        document.querySelector('.active').classList.remove('active')
        lis[4].classList.add('active')
    }
    else{
        document.querySelector('.active').classList.remove('active')
        lis[0].classList.add('active')
    }
})

// Click effect on side navi
side_nav.addEventListener('click', function(e){
    if (e.target.tagName==='A'){
        function scroll(i){
            document.documentElement.scrollTop=main[i].offsetTop
        }
        let i=e.target.dataset.index
        // if target is not "Top", scroll to specific position
        i==-1? document.documentElement.scrollTop=0 : scroll(i)
    }
})