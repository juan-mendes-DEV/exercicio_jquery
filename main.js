$(document).ready(function(){
    

    $('form').on('submit', function(e){
        e.preventDefault();

    const data = $('#data').val();
    const hora = $('#hora').val();
    const tarefas = $('#tarefas').val();

    const novaTarefa = $('<tr>');
    $(`<td> ${data}</td>`).appendTo(novaTarefa);
    $(`<td> ${hora}</td>`).appendTo(novaTarefa);
    $(`<td> ${tarefas}</td>`).appendTo(novaTarefa);
    $(`</tr>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('table');
    $(novaTarefa).fadeIn();
    
    $('td').click(function(){
        $(this).css('text-decoration', 'line-through');
        $(this).css('color', 'lime');
    })

    })
})