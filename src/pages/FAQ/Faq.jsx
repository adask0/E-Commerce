import React, { useState } from 'react';

const FAQ = () => {
    const [expandedFaq, setExpandedFaq] = useState(null);

    const faqData = [
        {
            id: 1,
            question: "Jak mogę złożyć zamówienie?",
            answer: "Aby złożyć zamówienie, przeglądaj naszą listę produktów, dodaj wybrane artykuły do koszyka, a następnie przejdź do finalizacji zakupu. Wypełnij dane dostawy i wybierz metodę płatności."
        },
        {
            id: 2,
            question: "Jakie są dostępne metody płatności?",
            answer: "Akceptujemy następujące metody płatności: karty kredytowe (Visa, MasterCard), BLIK, przelewy bankowe, PayPal oraz płatność przy odbiorze."
        },
        {
            id: 3,
            question: "Ile czasu trwa dostawa?",
            answer: "Standardowa dostawa trwa 1-3 dni robocze. Dostawa ekspresowa (24h) jest dostępna za dodatkową opłatą. Czas dostawy może się wydłużyć w przypadku produktów niestandardowych lub w okresach wzmożonego ruchu."
        },
        {
            id: 4,
            question: "Czy mogę zwrócić produkt?",
            answer: "Tak, oferujemy 30-dniową gwarancję zwrotu. Produkty muszą być nieużywane, w oryginalnym opakowaniu. Koszty zwrotu ponosi klient, chyba że produkt jest wadliwy."
        },
        {
            id: 5,
            question: "Czy oferujecie gwarancję na produkty?",
            answer: "Wszystkie nasze produkty objęte są gwarancją producenta. Okres gwarancji zależy od konkretnego produktu - zazwyczaj wynosi od 12 do 36 miesięcy. Szczegóły znajdują się w opisie każdego produktu."
        },
        {
            id: 6,
            question: "Jak mogę sprawdzić status mojego zamówienia?",
            answer: "Po złożeniu zamówienia otrzymasz e-mail z numerem zamówienia i linkiem do śledzenia. Możesz także zalogować się na swoje konto, aby sprawdzić status wszystkich swoich zamówień."
        },
        {
            id: 7,
            question: "Czy oferujecie wsparcie techniczne?",
            answer: "Tak, nasz zespół wsparcia technicznego jest dostępny od poniedziałku do piątku w godzinach 8:00-18:00. Możesz skontaktować się z nami telefonicznie, przez e-mail lub chat online."
        },
        {
            id: 8,
            question: "Czy produkty mają certyfikaty jakości?",
            answer: "Wszystkie nasze produkty elektroniczne posiadają odpowiednie certyfikaty CE, FCC oraz inne wymagane certyfikaty bezpieczeństwa i jakości zgodnie z normami europejskimi i międzynarodowymi."
        },
        {
            id: 9,
            question: "Czy oferujecie rabaty dla stałych klientów?",
            answer: "Tak! Oferujemy program lojalnościowy, gdzie za każdy zakup zbierasz punkty. Możesz je wymienić na rabaty przy kolejnych zakupach. Regularnie organizujemy także promocje dla zarejestrowanych użytkowników."
        },
        {
            id: 10,
            question: "Jak mogę skontaktować się z obsługą klienta?",
            answer: "Możesz skontaktować się z nami przez: e-mail: support@electromarket.pl, telefon: 123-456-789, chat online na stronie, lub formularz kontaktowy. Odpowiadamy na wszystkie zapytania w ciągu 24 godzin."
        }
    ];

    const toggleFaq = (faqId) => {
        setExpandedFaq(expandedFaq === faqId ? null : faqId);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">Często zadawane pytania</h1>
                    <p className="text-gray-600">Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych produktów i usług</p>
                </div>

                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    <div className="p-6">
                        <div className="space-y-4">
                            {faqData.map((faq) => (
                                <div key={faq.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                                    <button
                                        onClick={() => toggleFaq(faq.id)}
                                        className="w-full flex items-center justify-between text-left p-4 hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg
                                            className={`w-5 h-5 text-gray-400 transform transition-transform ${
                                                expandedFaq === faq.id ? 'rotate-180' : ''
                                            }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {expandedFaq === faq.id && (
                                        <div className="px-4 pb-4 animate-fadeIn">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <p className="text-gray-700 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                    <div className="text-center">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Nie znalazłeś odpowiedzi?</h2>
                        <p className="text-gray-600 mb-6">Skontaktuj się z naszym zespołem obsługi klienta</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="flex items-center space-x-2 text-gray-700">
                                <span className="text-lg">📧</span>
                                <span>support@electromarket.pl</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-700">
                                <span className="text-lg">📞</span>
                                <span>123-456-789</span>
                            </div>
                            <div className="flex items-center space-x-2 text-gray-700">
                                <span className="text-lg">💬</span>
                                <span>Chat online: Pn-Pt 8:00-18:00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
