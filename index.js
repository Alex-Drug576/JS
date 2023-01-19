var question = prompt('How old are you?', 'ENTER ONLY NUMBER');
if (Number(question) % 10 == 1 && question != 11) {
    alert('Im ' + question + ' god');
} else if ([2, 3, 4].includes(Number(question) % 10) && !(12 <= question && question <= 14)) {
    alert('Im ' + question + ' goda');
} else alert('Im ' + question + ' let');
