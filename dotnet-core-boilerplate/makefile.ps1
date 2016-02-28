$dnvm = 'dnvm';
$install = 'install';
$version = $env:TARGET_DNX_VERSION ;
$runtime = $env:TARGET_DNX_RUNTIME ;
$architecture = $env:TARGET_DNX_ARCH ;
$platform = $env:platform ;

#check for dotnet CLI install
if(Test-Path -Path "$env:USERPROFILE\.dnx\runtimes\$version" -eq $false) {
  #install if not installed

  & $dnvm $install $version $runtime $architecture $platform -unstable;
}
#check for dotnet runtime intall
#install if not installed

#check for node runtime install
#install if not installed

#build projects

#package projects
