export default function HomePage() {
  const mockData = [
    {
      id: 1,
      url: "https://utfs.io/f/drz157BDFg65WUy6JhGN3GQtJ9d7OyIbruEoxD5ZYvcm1LiT",
    },
    {
      id: 2,
      url: "https://utfs.io/f/drz157BDFg65T6O57qFjnBC0EwtpIbmDv4GTN85AiqaxWyUo",
    },
    {
      id: 3,
      url: "https://utfs.io/f/drz157BDFg659ICRPVwDEbGn3RUQICSg6LF0sqvy1toKNikM",
    },
    {
      id: 4,
      url: "https://utfs.io/f/drz157BDFg65kYMZ1qKOoGbF2g1tLuNC3VM48TEeH6zInvQP",
    },
    {
      id: 5,
      url: "https://utfs.io/f/drz157BDFg65TMj9eHzFjnBC0EwtpIbmDv4GTN85AiqaxWyU",
    },
    {
      id: 6,
      url: "https://utfs.io/f/drz157BDFg65FGEJAaPsQiG2IcJqgVm3PdNlfXyxHt0uaEpr",
    },
    {
      id: 7,
      url: "https://utfs.io/f/drz157BDFg65FGEJAaPsQiG2IcJqgVm3PdNlfXyxHt0uaEpr",
    },
    {
      id: 8,
      url: "https://utfs.io/f/drz157BDFg65FGEJAaPsQiG2IcJqgVm3PdNlfXyxHt0uaEpr",
    },
    {
      id: 9,
      url: "https://utfs.io/f/drz157BDFg65FGEJAaPsQiG2IcJqgVm3PdNlfXyxHt0uaEpr",
    },
  ];

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockData.map((item) => (
          <div key={item.id} className="w-48">
            <img alt="image" src={item.url} className="w-full" />
          </div>
        ))}
      </div>
    </main>
  );
}
