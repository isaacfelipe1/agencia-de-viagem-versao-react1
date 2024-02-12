import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.azulviagens.com.br/images/upload/2023/Banners%20AZV/Pontos/banner-super-ofertas-reais-pontos.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.azulviagens.com.br/images/upload/2023/Banners%20AZV/Reais/AZV-banner-luck-fernando-de-noronha-reais.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.azulviagens.com.br/images/upload/2023/Banners%20AZV/Reais/AZV-banner-carmel-reais-v1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
export default DarkVariantExample;