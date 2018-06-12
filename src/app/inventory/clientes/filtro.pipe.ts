import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  pure: false,
})
export class FiltroPipe implements PipeTransform {
  private
  transform(clientes: any, buscar: any, adicional: string): any {
    if (buscar === undefined) return clientes;
    return clientes.filter(function (usuario) {
      if (adicional === 'cedula'.toString()) {
        return usuario.cedula.toLowerCase().includes(buscar.toLowerCase());
      } else if (adicional === 'nombre'.toString()) {
        const nombre = usuario.nombre;
        return nombre.toLowerCase().includes(buscar.toLowerCase());
      } else {
        return clientes;
      }
    })
  }

}
