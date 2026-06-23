function MenuItems({ menuType }) {
  return (
    <div className="grid grid-cols-12 gap-8">
      {menuType.map((item, index) => {
        const shouldBeCentered =
          menuType.length === 1 ||
          (menuType.length % 2 !== 0 && index === menuType.length - 1);

        return (
          <div
            key={index}
            className={
              shouldBeCentered
                ? "col-span-12 md:col-span-6 md:col-start-4"
                : //start 4 indica che su una griglia di 12 colonne,
                  // se è un solo item, sarà sempre di dimensione 6,
                  // ma partirà dalla colonna 4 il suo posizionamento,
                  // cosi risulterà centrata
                  "col-span-12 md:col-span-6"
            }
          >
            <img
              src={item}
              alt={`Menu ${index + 1}`}
              className="w-full shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
