$(function(){

	falseClick();
	exporResumo();
	discussão();

	var contador=1;

	function falseClick(){
		$('.icones-menu a').click(function(){
			var href=$(this).attr('href');
			
			$.ajax({
				'url':href
			}).done(function(data){
				$('body').html(data);
				$('a[href="'+href+'"]').css('border-image', 'linear-gradient(#FEB052,#EF7D3B)');
				$('a[href="'+href+'"]').css('border-image-slice', '1');
				$('a[href="'+href+'"]').css('padding-left', 'calc(10% + 4px)');		
			});

			return false;

		});
	};

	function exporResumo(){

		$('.caixa-resumo').click(function(){
			
			if(contador%2==0){
				$('.texto-resumo').css('height','145px');
				$('.ver-mais').css('display','block');
				contador=contador+1;
			}else{
				$('.texto-resumo').css('height','auto');
				$('.ver-mais').css('display','none');
				contador=contador+1;
			};	
		});
	};

	function discussão(){
		$('.botão-tópico').click(function(){
			$('.texto-discussões').fadeOut();
			$('.enviar-discussão').fadeIn(1000);
		});

		$('.footer-enviar input').click(function(){
			$('.enviar-discussão').fadeOut();
			$('.tópico-enviado').fadeIn(1000);
			$('.pergunta-feedback').fadeIn();
			$('.aguardando-feedback').fadeIn();
		})

		$('.botão-tópico2').click(function(){
			$('.tópico-enviado').fadeOut();
			$('.pergunta-feedback').fadeOut();
			$('.aguardando-feedback').fadeOut();
			$('.enviar-discussão').fadeIn(1000);
		});
	};

});





