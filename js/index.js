//add child

function addtask() {
    const newTask = `<div class="task">
    <div class="course-name">
        <input type="text" placeholder="Course">
    </div>
    <div class="credits">
        <select name="" id="" value="0">
            <option value="">3</option>
            <option value="">1</option>
            <option value="0" selected>0</option>
            <option value="">1.5</option>
            <option value="">2</option>
            <option value="">4</option>
        </select>
    </div>
    <div class="grade">
        <select name="" id="">
             <option value="">A</option>
            <option value="">A-</option>
            <option value="">B+</option>
            <option value="">B</option>
            <option value="">B-</option>
            <option value="">C+</option>
            <option value="">C</option>
            <option value="">C-</option>
            <option value="">D+</option>
            <option value="">D</option>
            <option value="">F</option>
        </select>
    </div>
    <div class="close">
        <i class="far fa-times-circle"></i>
    </div>
</div>`;
    document.getElementById('tasks').insertAdjacentHTML('beforebegin', newTask);
}

document.querySelector('.add-task-btn .fa-plus-circle').addEventListener('click',
    function(e) {
        addtask();
    }
)

//remove child

let allTasks = document.getElementById('tasks');

const removeButons = document.getElementsByClassName('fa-times-circle');
for (const removeButon of removeButons) {
    removeButon.addEventListener('click', function(e) {
        if (allTasks.lastElementChild !== true) {
            const task = e.target.parentElement.parentElement;
            allTasks.removeChild(task);
        }
    });
}