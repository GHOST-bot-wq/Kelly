# PowerShell script para sincronizar as imagens do projeto Kelly Rezende | Divina Derma
$sourceDir = "C:\Users\Win11\.gemini\antigravity\brain\95fcb9fa-63ac-435e-97d5-d30994bd4e99\.user_uploaded"
$destDirs = @(
    Join-Path $PSScriptRoot "public\images",
    Join-Path $PSScriptRoot "images"
)

foreach ($dest in $destDirs) {
    if (-not (Test-Path $dest)) {
        New-Item -ItemType Directory -Path $dest -Force | Out-Null
    }
}

$images = @{
    "media_1792192323572_e7639cb2.png" = "kelly-rezende-profissional.png"
    "media_1792192308681_dae71ad1.png" = "procedimento-limpeza-massagem.png"
    "media_1792192308694_dc190a34.png" = "protocolo-mascara-facial.png"
    "media_1792192308731_14fd13ee.png" = "tecnologia-cosmobeauty-led.png"
}

foreach ($img in $images.GetEnumerator()) {
    $srcFile = Join-Path $sourceDir $img.Key
    if (Test-Path $srcFile) {
        foreach ($dest in $destDirs) {
            $destFile = Join-Path $dest $img.Value
            Copy-Item -Path $srcFile -Destination $destFile -Force
            Write-Host "Copiado: $($img.Value) -> $dest" -ForegroundColor Green
        }
    } else {
        Write-Host "Arquivo de origem não encontrado: $srcFile" -ForegroundColor Yellow
    }
}

Write-Host "`nSincronização concluída com sucesso!" -ForegroundColor Cyan
