const taskList = {
    homework: {
        status: false,
        text: 'do homework'
    },
    work: {
        status: true,
        text: 'do at work'
    },
    work2: {
        status: false,
        text: 'do at work'
    },
    addTast(){
        let task = prompt('Enter your task name');
        for(var property in taskList){
            while(property === task){
               task = prompt('This task already exicts, choose a different task name');
            } 
        }
        let textTask = prompt('Enter your text for task');
        taskList[task] = {
            status: false,
            text: textTask,
        };
    },
    deleteTask(obj){
        delete taskList[obj];
    },
    editTask(){
        let task = prompt(`Enter your name task what's you want to edits`);
        for(var property in taskList){
            if(property === task){
                if(confirm(`if you want edit status press 'OK', if test press 'Cancel'`)){
                    console.log(property['status'])
                    taskList[property].status = true;
                }else{
                    taskList[property].text = prompt('Enter your text for task');
                }
            }
        }
    },
    resultTask(){
        let res = 0;
        let obj = {};
        for(var property in taskList){
            if(taskList[property].status === true){
                res++;
            }
            if(taskList[property].status === false){
                obj[property] = taskList[property]
            }

        }
        console.log(`Access task is ${res}`);
        console.log(obj)
        
    }
}
//taskList.editTask()
// taskList.deleteTask('work');
// taskList.addTast()
// taskList.resultTask()

