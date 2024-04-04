import "./footer.css";

export default function Footer() {
    return (
        <>
            <main className="footer-main">
                <section></section>
                <section>
                    <div></div>
                    <div className="footer-center">
                        <h1>Eat, Cook, Repeat</h1>
                        <p>Share your best recipe by uploading here !</p>
                    </div>
                    <div
                        className="footer-end"
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: 500,
                        }}
                    >
                        <h1>Product</h1>
                        <h1>Company</h1>
                        <h1>Learn More</h1>
                        <h1>Get In Touch</h1>
                    </div>
                </section>
                <section
                    style={{
                        display: "flex",
                        justifyContent: "end",
                        marginBottom: 20,
                    }}
                >
                    <h1 style={{ fontSize: 16, fontWeight: 500 }}>Arkademy</h1>
                </section>
            </main>
        </>
    );
}
