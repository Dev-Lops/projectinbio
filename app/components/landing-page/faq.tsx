export function Faq() {
  const faq = [
    {
      title: "Como funciona o ProjectInBio?",
      description: "O ProjectInBio é uma plataforma que permite a criação de páginas de projetos de pesquisa e inovação em biologia. Com ele, você pode criar uma página para o seu projeto, compartilhar com outros pesquisadores e receber feedbacks. Além disso, você pode usar o nosso sistema de gestão de projetos para gerenciar seu projeto de forma eficiente."
    },
    {
      title: "Como faço para criar uma página de projeto?",
      description: "Para criar uma página de projeto, você precisa ter uma conta no ProjectInBio. Depois, você pode criar uma página para o seu projeto, compartilhar com outros pesquisadores e receber feedbacks. Além disso, você pode usar o nosso sistema de gestão de projetos para gerenciar seu projeto de forma eficiente."
    }, {
      title: "Há um periodo de teste gratuito?",
      description: "Sim, há um período de teste gratuito. Você pode criar uma página de projeto e compartilhar com outros pesquisadores e receber feedbacks. Além disso, você pode usar o nosso sistema de gestão de projetos para gerenciar seu projeto de forma eficiente."
    },
    {
      title: 'Posso personalizar o design do meu portfolio?',
      description: 'Sim, você pode personalizar o design do seu portfolio. Você pode escolher entre vários templates pré-definidos ou criar o seu próprio template.'
    },
    {
      title: 'O que acontece se eu cancelar minha assinatura?',
      description: 'Se você cancelar sua assinatura, você perderá acesso a todos os recursos do ProjectInBio. Além disso, você não poderá mais criar páginas de projetos.'
    }, {
      title: 'Posso compartilhar meu portfólio em redes sociais?',
      description: 'Sim, você pode compartilhar seu portfólio em redes sociais. Você pode usar o nosso sistema de compartilhamento para compartilhar seu portfólio em redes sociais.'
    },
  ]
  return (
    <div className="flex flex-col gap-16 items-center my-20">
      <h3 className="text-white text-2xl font-bold">Dúvidas frequentes</h3>
      <div className="grid grid-cols-2 gap-3">
        {faq.map((item) => (
          <FaqItem key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </div >
  )
}

function FaqItem({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col gap-2 border border-border-primary bg-background-primary rounded-2xl rounded-border-primary p-4 w-[371px]">
      <p className="text-white font-bold">{title}</p>
      <p className="text-content-body">{description}</p>
    </div>
  )
}
