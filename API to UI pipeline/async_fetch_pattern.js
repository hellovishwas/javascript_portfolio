//pipeline syntax:-
// Array+objects-->map/filter/reduce-->DOM-->Events-->Promises-->async/await-->Fetch API-->API data-->DOM

async function loadCompletedtodos(){
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
        throw new Error("Failed to fetch todos");
    }
    const todos = await response.json()
    const completedtodos = todos.filter((todo) => todo.completed===true);
    return completedtodos;
};

async function runApp() {
    try {
        const completedtodos = await loadCompletedtodos();
        const container = document.getElementById("todo-container");
        container.innerHTML = "";
        completedtodos.forEach((todo) => {
            const item = document.createElement("p");
            item.textContent = todo.title;
            container.appendChild(item);
        });
        console.log(completedtodos);
    }
    catch (error) {
        console.error("Pipeline Error:",error);
    }
}
runApp();


