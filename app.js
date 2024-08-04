const search = document.querySelector('#search')
const formTodo = document.querySelector('#addTodo')
const todosContainer = document.querySelector('ul')

formTodo.addEventListener('submit', e => {
    e.preventDefault()
    const inputValue = e.target.add.value
    if (inputValue.length) {
        todosContainer.classList.add('bg-slate-800')
        todosContainer.innerHTML += `
            <li class="flex item items-center justify-between px-5 py-1 my-2 bg-slate-700" data-item="${inputValue}">
                    <span class="text-gray-300">${inputValue}</span>
                    <i class="far fa-trash-alt cursor-pointer  text-gray-300" data-delete="${inputValue}"></i>
            </li>`
    }

    e.target.reset()
})

search.addEventListener('input', e => {
    const inputValue = e.target.value.toLowerCase()
    const lisArray = Array.from(todosContainer.children)
    lisArray
        .filter(todo => !todo.textContent.toLowerCase().includes(inputValue))
        .forEach(item => {
            item.classList.add('hidden')
            item.classList.remove('flex')
        })
    lisArray
        .filter(todo => todo.textContent.toLowerCase().includes(inputValue))
        .forEach(item => {
            item.classList.add('flex')
            item.classList.remove('hidden')
        })
    if (lisArray.every(item => item.className.includes('hidden'))) {
        todosContainer.classList.add('hidden')
        todosContainer.classList.remove('flex')

    } else {
        todosContainer.classList.add('flex')
        todosContainer.classList.remove('hidden')
    }

})

todosContainer.addEventListener('click', e => {
    const clickedDelete = e.target.dataset.delete
    const todo = document.querySelector(`[data-item="${clickedDelete}"]`)
    if (clickedDelete) {
        todo.remove()
    }
    const arrayLis = Array.from(todosContainer.children)

    if (arrayLis.length == 0) {
        todosContainer.classList.remove('bg-slate-800')
    }
})