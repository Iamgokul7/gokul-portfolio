$baseDir = "S:\WORK\PORTFOLIO"
$srcDir = "$baseDir\src"
$appDir = "$srcDir\app"
$componentsDir = "$srcDir\components"

# Remove existing app pages to replace with our structure
Remove-Item -Path "$appDir\page.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$appDir\layout.tsx" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "$appDir\globals.css" -Force -ErrorAction SilentlyContinue

$dirs = @(
    "$appDir\(main)\about",
    "$appDir\(main)\projects\[slug]",
    "$appDir\(main)\experience",
    "$appDir\(main)\certifications",
    "$appDir\(main)\blog\[slug]",
    "$appDir\(main)\contact",
    "$componentsDir\ui",
    "$componentsDir\shared",
    "$componentsDir\animations",
    "$componentsDir\home",
    "$componentsDir\about",
    "$componentsDir\projects",
    "$componentsDir\blog",
    "$srcDir\lib",
    "$srcDir\hooks",
    "$srcDir\types",
    "$srcDir\content\blog",
    "$srcDir\content\projects",
    "$baseDir\public\images",
    "$baseDir\public\fonts"
)

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        $null = New-Item -ItemType Directory -Path $dir -Force
    }
}

$files = @(
    "$appDir\layout.tsx",
    "$appDir\globals.css",
    "$appDir\not-found.tsx",
    "$appDir\(main)\layout.tsx",
    "$appDir\(main)\page.tsx",
    "$appDir\(main)\about\page.tsx",
    "$appDir\(main)\projects\page.tsx",
    "$appDir\(main)\projects\[slug]\page.tsx",
    "$appDir\(main)\experience\page.tsx",
    "$appDir\(main)\certifications\page.tsx",
    "$appDir\(main)\blog\page.tsx",
    "$appDir\(main)\blog\[slug]\page.tsx",
    "$appDir\(main)\contact\page.tsx",
    "$componentsDir\shared\header.tsx",
    "$componentsDir\shared\footer.tsx",
    "$componentsDir\shared\custom-cursor.tsx",
    "$componentsDir\shared\theme-toggle.tsx",
    "$componentsDir\animations\fade-in.tsx",
    "$componentsDir\animations\stagger-container.tsx",
    "$componentsDir\animations\magnetic-button.tsx",
    "$componentsDir\home\hero-section.tsx",
    "$componentsDir\home\featured-projects.tsx",
    "$componentsDir\home\skills-marquee.tsx",
    "$componentsDir\projects\project-card.tsx",
    "$componentsDir\projects\project-gallery.tsx",
    "$componentsDir\blog\mdx-components.tsx",
    "$componentsDir\blog\blog-card.tsx",
    "$srcDir\lib\utils.ts",
    "$srcDir\lib\mdx.ts",
    "$srcDir\lib\animations.ts",
    "$srcDir\types\index.d.ts",
    "$srcDir\hooks\use-scroll.ts",
    "$srcDir\hooks\use-mouse-position.ts"
)

foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        $null = New-Item -ItemType File -Path $file -Force
    }
}
