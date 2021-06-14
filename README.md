# Sobre el desarrollo:
Es mi primer acercamiento teorico y practico a Angular y TypeScript, este projecto esta desarollado con lo que aprendi de ambas tecnologias en el plazo de 72 horas dados para resolver el practico, por lo tanto solo abarca la fase 1 y podria estar incompletoa a diferencia de la version anterior:<br/>
https://github.com/GusES/To-Do-List_-Ensolvers- <br/>
Son tecnologias duras de manejar pero gratificantes cuando se empieza entender y verlas funcionando.

# Requisitos:
<ul>
  <li> Angular CLI 12.0.4 </li>
  <li> TypeScript 4.3.2 </li>
  <li> XAMPP 3.3.0</li>
  <li> MariaDB 10.4.19</li>
  <li> PHP 8.0.6</li>
  <li> Apache 2.4.47</li>  
</ul>

# Configuracion:
<p>
  1- Instalar XAMPP<br>
  2- Instalar TypeScript con <pre>npm install -g typescript</pre><br>
  3- Instalar AngularCLI con <pre>npm install -g @angular/cli</pre><br>
  4- Dentro de la carpeta htdocs de XAMPP iniciar un nuevo proyecto todolist AngularCLI con <pre>ng new todolist</pre><br>
  5- Copia los archivos de este projecto en la raiz de la carpeta todolist, reemplazar de ser necesario<br>
  6- Iniciar el servidor MySQL y Apache de XAMPP, importar la siguiente base de datos desde el script inferior<br>
  7- Iniciar el servidor de AngularCLI con <font color=blue>ng serve</font><br>
  8- En caso de no tener conexion entre PHP y AngularCLI modificar la ruta URL en <br/>
  https://github.com/GusES/Todolist-Angular/blob/master/src/app/db-conexion.service.ts <br/>
  9-Iniciar el servidor de Angular con <pre>ng serve</pre>
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

# Que se realizo?
Creador de tareas.<br/>
Visualizador de tareas.<br/>

# Que falto?
Edicion del nombre de tarea.<br/>
Edicion de estado de tarea.<br/>
