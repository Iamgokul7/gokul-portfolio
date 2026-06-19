$baseDir = "S:\WORK\PORTFOLIO"
$srcDir = "$baseDir\src"
$appDir = "$srcDir\app"
$componentsDir = "$srcDir\components"
$dataDir = "$srcDir\data"

$dirs = @(
    "$componentsDir\animations\parallax",
    "$componentsDir\animations\reveal",
    "$componentsDir\animations\transitions",
    "$componentsDir\effects",
    "$componentsDir\seo",
    "$componentsDir\projects\case-study",
    "$dataDir"
)

foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        $null = New-Item -ItemType Directory -Path $dir -Force
    }
}

$files = @(
    # 1. Advanced Motion System
    "$componentsDir\animations\parallax\parallax-image.tsx",
    "$componentsDir\animations\parallax\parallax-wrapper.tsx",
    "$componentsDir\animations\reveal\text-reveal.tsx",
    "$componentsDir\animations\reveal\section-reveal.tsx",
    "$componentsDir\animations\transitions\page-transition.tsx",
    
    # 2. Showcase System
    "$componentsDir\projects\case-study\project-metrics.tsx",
    "$componentsDir\projects\case-study\project-timeline.tsx",
    "$componentsDir\projects\case-study\project-story.tsx",
    "$componentsDir\projects\interactive-gallery.tsx",

    # 3. Experience Layer
    "$componentsDir\effects\noise-overlay.tsx",
    "$componentsDir\effects\grid-overlay.tsx",
    "$componentsDir\effects\gradient-background.tsx",
    "$componentsDir\home\cinematic-intro.tsx",

    # 4. Content Architecture (Centralized Data Layer)
    "$dataDir\projects.ts",
    "$dataDir\certifications.ts",
    "$dataDir\experience.ts",
    "$dataDir\skills.ts",
    "$dataDir\socials.ts",
    "$dataDir\site-config.ts",

    # 5. SEO Architecture
    "$appDir\sitemap.ts",
    "$appDir\robots.ts",
    "$appDir\opengraph-image.tsx",
    "$componentsDir\seo\meta.tsx"
)

foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        $null = New-Item -ItemType File -Path $file -Force
    }
}
