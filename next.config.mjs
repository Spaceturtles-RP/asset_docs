import nextra from "nextra";

const withNextra = nextra({
    latex: true,
    search: true,
    staticImage: true
});

export default withNextra({
    turbopack: false,
    reactStrictMode: true,
    output: 'export',
    images: {
        unoptimized: true // mandatory, otherwise won't export
    }    
  })