const search = document.querySelector('#search')
const formTodo = document.querySelector('#addTodo')
const todosContainer = document.querySelector('ul')

formTodo.addEventListener('submit', e => {
    e.preventDefault()
    const inputValue = e.target.add.value
    todosContainer.innerHTML += `<li class="flex item items-center justify-between px-5 py-1 my-2 bg-slate-700">
                <span class="text-gray-300">${inputValue}</span>
                <i class="far fa-trash-alt  text-gray-300"></i>
            </li>`

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