import React from 'react'


const page: React.FC = () => {
  return (
    <div>
      <div className="p-2 md:m-20 md:p-16 md:pt-4 rounded-md bg-gray-dark ">
        <h1 className="text-3xl text-white md:-ml-8">Arroz Branco:</h1>
        <h3 className="text-white text-center pt-12 pb-4"> O preparo do arroz soltinho não tem mistério: basta seguir a proporção e o tempo que ele dá certo. Refogado com cebola e louro, fica saboroso e perfumado.</h3>
        <img className="w-full rounded-md border-2 border-orange-light" src="/img/rice.jpg" alt="" />

        <div className="pt-6 flex flex-col items-center md:items-stretch md:flex md:flex-row">
          <div className="w-full md:w-1/3 md:mr-2 mt-4 mb-4 p-2 rounded-lg space-y-4 bg-orange-lightest">
            <h2 className="pt-4 pl-4">Ingradiente</h2>
            <hr className="m-4 border-2 border-gray-light" />
            <li>1 xícara (chá) de arroz</li>
            <li>2 xícaras (chá) de água</li>
            <li>½ cebola</li>
            <li>1 colher (sopa) de azeite</li>
            <li>1 folha de louro</li>
            <li>½ colher (chá) de sal</li>
          </div>
          <div className="w-full md:w-2/3 md:ml-2 mt-4 mb-4 mr-0 p-2 rounded-lg space-y-4 bg-orange-lightest">
            <h2 className="pt-4 pl-4">Preparo</h2>
            <hr className="m-2 border-2 border-gray-light" />
            <li>1.Aqueça uma panela com o azeite, acrescente a cebola, o alho e deixe refogar, mexendo até que esteja dourado.</li>
            <li>2.Acrescente o arroz, o sal e frite bem.</li>
            <li>3.Coloque água fervente até que cubra o arroz, abaixe o fogo e deixe cozinhar.</li>
            <li>4.Caso a água seque e o arroz ainda não esteja cozido, adicione mais água.</li>
            <li>5.Deixe cozinhar até secar, e cheque novamente se já está cozido. Desliguei o fogo, solte o arroz com um garfo e sirva.</li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page