import RaidCard from "./components/RaidCard";

const mock1 = {
  _id: "678709a41b9f47c2903f1839",
  date: "2025-01-24T03:00:00.000Z",
  platform: "CoinMarketCap",
  url: "https://coinmarketcap.com/dexscan/solana/Cwa4wde1oAbiwDZuEykwiebPr3CbayoMfTbATM4MXxgJ",
  shareMessage: "Participe do Raid da $BCT no CoinMarketCap! 🚀🔥 #BCT",
  content:
    "## 🚀 Organize-se para o Raid do **BEIÇOLA TOKEN (BCT)** no CoinMarketCap! 🔥\n\n### 📢 O que está acontecendo?  \nA **BCT** ainda **não está verificada** no CoinMarketCap! 😱  \nPrecisamos da sua ajuda para mudar isso. **Vote agora** para que o token seja verificado e ganhe mais visibilidade na comunidade!  \n\n---\n\n### 🌟 Por que votar na BCT?  \n- 💎 **Projetos promissores merecem destaque!**  \n- 📈 A verificação no CoinMarketCap traz mais confiança e engajamento para o token.  \n- 💬 Vamos unir a comunidade da BCT para mostrar nossa força!  \n\n---\n\n### 📲 Como votar?  \n1. Acesse o link do token no CoinMarketCap:  \n   👉 [BCT/BEIÇOLA TOKEN no CMC](https://coinmarketcap.com/dexscan/solana/Cwa4wde1oAbiwDZuEykwiebPr3CbayoMfTbATM4MXxgJ/)  \n2. Clique no **joinha** 👍 e ajude a **BCT** a ser reconhecida! 🗳️  \n\n---\n\n### ✊ Vamos juntos!  \nMostre que a **comunidade BEIÇOLA** é forte e apoia o projeto! Compartilhe esta mensagem e convoque seus amigos para o **Raid da BCT no CMC**! 🌐🔥  \n\n---\n\n**🔗 Link direto para votação:**  \n👉 [Vote aqui!](https://coinmarketcap.com/dexscan/solana/Cwa4wde1oAbiwDZuEykwiebPr3CbayoMfTbATM4MXxgJ/)  \n\n**🌍 Juntos, somos mais fortes. Vamos fazer a BCT brilhar! 💪**",
};

const mock2 = {
  _id: "67872cd21b9f47c2903f183a",
  date: "2025-01-14T03:00:00.000Z",
  platform: "Reddit",
  url: "https://www.reddit.com/r/CryptoMoonShots/",
  shareMessage:
    "🚀🔥 Vamos falar sobre o BEIÇOLA TOKEN ($BCT)! Diga o que você acha e vamos fazer esse token bombar! #CryptoMoonShots #BCT #CryptoRaid",
  content:
    "## 🚀 O que é o **BEIÇOLA TOKEN (BCT)**? 🔥\n\n### 📢 Vamos divulgar o **BCT** no Reddit!\n\nA comunidade BCT precisa de VOCÊ para crescer! Vamos mostrar o poder do nosso token e espalhar a palavra!\n\n### 🌟 Por que o BCT é especial? \n- 💎 **Projeto com grande potencial de crescimento!**\n- 📈 O **BCT** pode trazer grandes retornos no futuro!\n- 💬 Junte-se à nossa comunidade no Reddit para fortalecer ainda mais o projeto!\n\n### 📲 O que você pode fazer agora?  \n1. Crie um post no r/CryptoMoonShots ou compartilhe com seus amigos sobre o BCT! \n2. Comente no fórum e mostre seu apoio ao **BEIÇOLA TOKEN**! 💬\n\n### ✊ O futuro do **BCT** depende de nós!  \nCompartilhe este post e fortaleça a nossa comunidade no Reddit. Vamos fazer o BCT alcançar novos voos! 🚀🔥\n\n**🔗 Vamos juntos! Aqui está o link para o fórum do Reddit:**\n👉 [Participe no r/CryptoMoonShots!](https://www.reddit.com/r/CryptoMoonShots/)\n\n**🌍 Juntos, somos mais fortes! Vamos fazer o BCT brilhar no Reddit e no mundo cripto! 💪**",
};

const Raids = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4 p-4">
      <RaidCard
        _id={mock1._id}
        url={mock1.url}
        platform={mock1.platform}
        date={mock1.date}
        shareMessage={mock1.shareMessage}
        content={mock1.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock2.url}
        platform={mock2.platform}
        date={mock2.date}
        shareMessage={mock2.shareMessage}
        content={mock2.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock1.url}
        platform={mock1.platform}
        date={mock1.date}
        shareMessage={mock1.shareMessage}
        content={mock1.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock2.url}
        platform={mock2.platform}
        date={mock2.date}
        shareMessage={mock2.shareMessage}
        content={mock2.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock1.url}
        platform={mock1.platform}
        date={mock1.date}
        shareMessage={mock1.shareMessage}
        content={mock1.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock2.url}
        platform={mock2.platform}
        date={mock2.date}
        shareMessage={mock2.shareMessage}
        content={mock2.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock1.url}
        platform={mock1.platform}
        date={mock1.date}
        shareMessage={mock1.shareMessage}
        content={mock1.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock2.url}
        platform={mock2.platform}
        date={mock2.date}
        shareMessage={mock2.shareMessage}
        content={mock2.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock1.url}
        platform={mock1.platform}
        date={mock1.date}
        shareMessage={mock1.shareMessage}
        content={mock1.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock2.url}
        platform={mock2.platform}
        date={mock2.date}
        shareMessage={mock2.shareMessage}
        content={mock2.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock1.url}
        platform={mock1.platform}
        date={mock1.date}
        shareMessage={mock1.shareMessage}
        content={mock1.content}
      />
      <RaidCard
        _id={mock1._id}
        url={mock2.url}
        platform={mock2.platform}
        date={mock2.date}
        shareMessage={mock2.shareMessage}
        content={mock2.content}
      />
    </div>
  );
};

export default Raids;
