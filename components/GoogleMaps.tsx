export default function GoogleMaps() {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.1721080351567!2d8.588379587584528!3d49.12136640835224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8acc36de52dc9aad%3A0x3d8e3d791a753563!2sRP%20Schliesstechnik!5e0!3m2!1sde!2sde!4v1772397350920!5m2!1sde!2sde"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="RP Schliesstechnik auf Google Maps"
      />
    </div>
  );
}
