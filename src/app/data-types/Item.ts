export default class Item implements IItem
{
	public id: number;
	public name: string;
	public categoryId: number;

	public imageUrl: string = 'https://photos6.spartoo.eu/photos/444/4440676/4440676_500_B.jpg';
	public price: number = 0;
	public priceCurrency: string = '$'

	public description = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse congue neque vitae posuere molestie.Praesent lobortis lorem sed molestie facilisis.Integer eu suscipit purus, id tempor erat.Duis efficitur malesuada feugiat.Praesent vitae mollis odio.Mauris malesuada in velit sit amet tempus.Donec eu metus odio.Cras ac diam eu augue elementum sollicitudin.Nunc enim elit, euismod et pulvinar eu, consectetur sit amet metus.Maecenas et pellentesque ex.Donec scelerisque a quam vel facilisis.Pellentesque sed interdum lectus.Nam felis tellus, imperdiet ut congue eget, fermentum a urna.Donec lorem erat, molestie nec nisi vitae, suscipit sagittis velit.Donec scelerisque hendrerit vestibulum.Aliquam tristique nec nulla sit amet iaculis.</p>\
<p>Vestibulum accumsan tincidunt odio a blandit.Nunc hendrerit faucibus nibh, a pretium mi tincidunt non.Nam tristique feugiat tempus.Proin eu quam hendrerit, tincidunt lectus a, sodales ex.Quisque quis urna dictum, pretium arcu eu, sodales lectus.Proin consectetur velit id nibh lobortis viverra.Sed iaculis massa sem, vel dapibus erat euismod vel.Suspendisse augue lorem, molestie id quam eget, rutrum fermentum augue.Fusce ultrices aliquet sapien, molestie faucibus sem imperdiet tempor.Aliquam tristique nibh ac semper pulvinar.Pellentesque consequat elementum lacus eu venenatis.Curabitur tincidunt volutpat mauris a fringilla.Phasellus rutrum nisl sit amet metus mattis viverra et vel quam.</p>';

	constructor( data: IItem )
	{
		for ( let key in data )
			this[key] = data[key];
	}

	get priceFormatted()
	{
		return this.getPriceFormatted();
	}


	public getPriceFormatted( amount: number = 1 )
	{
		return this.priceCurrency + ( this.price * amount );
	}
}

export interface IItem
{
	id: number,
	name: string,
	description?: string,

	categoryId: number,

	imageUrl?: string
	price?: number,
	priceCurrency?: string,
}
