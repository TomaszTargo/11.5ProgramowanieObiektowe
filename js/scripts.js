$(function(){
    //this code will execute after the DOM is loaded
    
    //tworzenie przycisku bez parametru
    function Button(text) {
	this.text = text || 'Hello';
	}

	//tworzenie przycisku na stronie
	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $('<button>');
			this.$element.text(this.text);
			this.$element.click(function() {
				alert(self.text);
			});
			$('body').append(this.$element);
		}
	}
	
	
	//instancja
	var btn1 = new Button('Hello!');

	//metoda
	btn1.create();
});
//przypisujemy do zmiennej liste elementów
