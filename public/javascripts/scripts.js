const userName = document.querySelector('#newName')
const comment = document.querySelector('#newComment')
const commentsCont = document.querySelector('.comments__container')
const submitBtn = document.querySelector('.btn.btn-outline-primary')
const showBtn = document.querySelector('.btn.btn-outline-success')



submitBtn.addEventListener('click',submitFeedback)
showBtn.addEventListener('click',addFeedback)

feedbackArr = []

function submitFeedback(e){
    const userForm = userName.value
    const commentForm = comment.value
    if (userForm !== ' ' && commentForm !== ' ' && userForm.trim() !== 'hacker'){
        newFeedback = {
            "handle": userForm,
            "userComment": commentForm
        }
        feedbackArr.push(newFeedback)
        resetForm()
    }
    e.preventDefault()
}


function resetForm(){
    userName.value = ' '
    comment.value = ' '
    const commentCards = document.querySelectorAll('.comment__card');
    commentCards.forEach(card => card.remove());
}



function addFeedback(){
    for (const feedback of feedbackArr) {
        const div = document.createElement('div')
        div.classList = 'comment__card'
        div.id = feedback.id
        div.innerHTML = `
        <div class="comment__info">
        <div class="card mt-3">
        <div>
                    <small class="nickname">
                        ${feedback.handle}
                    </small>
                    </div>
                    <p class="comment" style="margin-bottom: -3px">
                        ${feedback.userComment}
                    </p>
                    </div>
                </div>
    `
        commentsCont.insertAdjacentElement('beforeend', div)
    }
}