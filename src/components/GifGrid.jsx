
import { GifItem } from "./GifItem";
import { useFetchGifs } from "./hooks/useFetchGifs";


export const GifGrid = ({ categoryq }) => {

	const { images, isLoading } = useFetchGifs(categoryq)


	//Si quieres que te aparezca con el nombre del objeto en consola, lo colocas entre {}.


	//Sustituyo todo esto por un 'Custom Hook' el cual ser谩 'useFetchGifs' y copio el c贸digo en el 'Custom Hook'

	// const [images, setImages] = useState([]);

	// const getImages = async () => {
	// 	const newImages = await getGifs(categoryq);
	// 	setImages(newImages);
	// }

	// useEffect(() => {
	// 	getImages();
	// }, [])

	return (
		<>
			<h3> {categoryq} 馃崕</h3>
			{
				isLoading && (<h2>Cargando...</h2>)
			}

			<div className="card-grid">
				{
					images.map((i) => (
						<GifItem key={i.id} {...i} />
					))}
			</div>
		</>)
}

 // todo 'm茅todo' itera con la intenci贸n de hacer una acci贸n en espec铆fico. Ej. buscar, devolver un array, filtrar
 // "i" te devolver谩 un objeto de la iteraci贸n de b煤squeda de cada componente, titleMarly y urlMarly son las propiedades(props) que yo estoy definiendo. Expando las propiedades con { ...i}
 // 'i' es una iteraci贸n a cada componente del array 'images', map es un m茅todo de los array,
