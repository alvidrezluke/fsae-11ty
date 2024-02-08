<?php
  exec(`curl -s https://api.github.com/repos/jgm/pandoc/releases/latest | grep "browser_download_url.*deb" | cut -d : -f 2,3 tr -d \" wget -qi -"`, $output);

  echo '<pre>';
  print_r($output);
  echo '</pre>';
?>
