age = prompt('Who old are you?', 'only number');

count = age % 10

if(age.endsWith('1') && age !== '11')
{
    alert('Тебе ' + age + ' год');
}else if(count >= 2 && count <=4)
    {
        alert('Тебе ' + age + ' года');
    }else 
        {
            alert('Тебе ' + age + ' лет');
        }