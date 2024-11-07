$(document).on("scroll", function() {
    const scrollPosition = $(this).scrollTop(); // Pega a posição de rolagem
    $(".parallax").each(function() {
        const speed = $(this).data("speed"); // Obtém o valor de 'data-speed'
        const yPos = -(scrollPosition * speed); // Calcula a posição Y
        $(this).css("transform", `translateY(${yPos}px)`); // Aplica a transformação
    });
});

