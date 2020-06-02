import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../product/product';

// Esse é o nome do pipe que será utilizado no html
@Pipe({name: "filterByTitle"})
export class FilterByTitle implements PipeTransform{
  // Primeiro passa a entrada depois os filtros que serâo aplicados
  transform(products: Product[], titleQuery: string) {
    titleQuery = titleQuery
      // Tira todos os espaços em branco desnecessários
      .trim()
      // Transforma em minusculo
      .toLowerCase();

    if(titleQuery){
      // Se tiver busca por titulo, será feito um filtro em products
      return products.filter(product => {
        // Pegando o título de cada produto
        return product.title
          // Tranformando em minusculo
          .toLowerCase()
          // E verificando se tem os caracteres da busca naquele elemento do array.
          .includes(titleQuery);
      })

    }else{
      // Caso não tenha filtro, será retornado todas as fotos.
      return products;
    }
  }

}
