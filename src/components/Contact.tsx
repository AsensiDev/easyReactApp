const svg = [
    {
        id: 'uno',
        name: "heart",
        svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" className=\"icon icon-tabler icon-tabler-phone-filled\" width=\"34\" height=\"34\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> \
                  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/> \
                  <path d=\"M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z\" stroke-width=\"0\" fill=\"white\" /> \
                </svg>"
      },
      {
        id: 'dos',
        name: "mail",
        svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-mail\" width=\"44\" height=\"44\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"white\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\"> \
          <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/> \
          <path d=\"M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z\" /> \
          <path d=\"M3 7l9 6l9 -6\" /> \
        </svg>"
      }
  ]

export type ContactProps = {
    name: string
    id: string
}



export default function Contact({ name, id }: ContactProps) {
    // Encontrar el SVG correspondiente según el ID proporcionado
    const selectedSvg = svg.find(item => item.id === id);
  
    return (
      <div className="flex gap-x-6 items-center">
        {selectedSvg && (
          <div
            dangerouslySetInnerHTML={{ __html: selectedSvg.svg }}
          ></div>
        )}
        <h3 className="text-white font-bold">{name}</h3>
      </div>
    );
  }
