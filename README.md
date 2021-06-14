# Requisitos:
<ul>
  <li> XAMPP 3.3.0 </li>
  <li> Angular CLI 12.0.4 </li>
  <li> TypeScript 4.3.2 </li>
</ul>

# Configuracion:
<p>
  Instalar XAMPP<br>
  Instalar TypeScript con <font color=blue>npm install -g typescript</font><br>
  Instalar AngularCLI con <font color=blue>npm install -g @angular/cli</font><br>
  Dentro de la carpeta htdocs de XAMPP iniciar un nuevo proyecto
  AngularCLI con <font color=blue>ng new todolist</font><br>
  Copia los archivos de este projecto en la raiz de la carpeta todolist, reemplazar de ser necesario<br>
  Iniciar el servidor MySQL y Apache de XAMPP, importar la siguiente base de datos desde el script inferior<br>
  Iniciar el servidor de AngularCLI con <font color=blue>ng serve</font><br>
  En caso de no tener conexion entre PHP y AngularCLI modificar la ruta URL en https://github.com/GusES/Todolist-Angular/blob/master/src/app/db-conexion.service.ts <font color=blue>ng serve</font><br>
</p>

# Script SQL
<pre>
  SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
  START TRANSACTION;
  SET time_zone = "+00:00";            
  /*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
  /*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
  /*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
  /*!40101 SET NAMES utf8mb4 */;            
  CREATE DATABASE IF NOT EXISTS `todolist` DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci;
  USE `todolist`;            
  CREATE TABLE `tareas` (
    `idTareas` int(11) NOT NULL,
    `titulo` text COLLATE utf8_spanish_ci NOT NULL,
    `estado` tinyint(1) NOT NULL DEFAULT 0
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;      
  ALTER TABLE `tareas`
  ADD PRIMARY KEY (`idTareas`) USING BTREE;            
  ALTER TABLE `tareas`
    MODIFY `idTareas` int(11) NOT NULL AUTO_INCREMENT;
  COMMIT;
  /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
  /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
  /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
</pre>
