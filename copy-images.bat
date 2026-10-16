@echo off
chcp 65001 >nul
echo ========================================================
echo   DIVINA DERMA ^| KELLY REZENDE — SINCRONIZADOR DE IMAGENS
echo ========================================================
echo.
echo Criando diretorios de imagens...
if not exist "%~dp0public\images" mkdir "%~dp0public\images"
if not exist "%~dp0images" mkdir "%~dp0images"

set SOURCE_DIR=C:\Users\Win11\.gemini\antigravity\brain\95fcb9fa-63ac-435e-97d5-d30994bd4e99\.user_uploaded

echo Copiando foto profissional de Kelly Rezende...
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%~dp0public\images\kelly-rezende-profissional.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192323572_e7639cb2.png" "%~dp0images\kelly-rezende-profissional.png" >nul

echo Copiando foto de procedimento (massagem facial e limpeza)...
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%~dp0public\images\procedimento-limpeza-massagem.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308681_dae71ad1.png" "%~dp0images\procedimento-limpeza-massagem.png" >nul

echo Copiando foto de protocolo (mascara facial e cuidado calmante)...
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%~dp0public\images\protocolo-mascara-facial.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308694_dc190a34.png" "%~dp0images\protocolo-mascara-facial.png" >nul

echo Copiando foto de tecnologia e produtos (mascara LED e peeling)...
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%~dp0public\images\tecnologia-cosmobeauty-led.png" >nul
copy /Y "%SOURCE_DIR%\media_1792192308731_14fd13ee.png" "%~dp0images\tecnologia-cosmobeauty-led.png" >nul

echo.
echo Todas as 4 imagens foram sincronizadas com sucesso em:
echo - public/images/
echo - images/
echo.
pause
